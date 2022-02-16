import { Link, useNavigate } from 'react-router-dom'
import React, { Suspense, useEffect, useState } from 'react'
import './MyActivity.css'
import { useSelector } from 'react-redux'
import  useFetch  from "fetch-suspense"
import Loading from '../Loading'



function ArticlesSold() {

  const datos = useSelector(d => d.userDatos)
  const userToken = useSelector(s => s.user)
  const navigate = useNavigate()

  useEffect(() => {
    !userToken && navigate('user/registre')
  }, [userToken, navigate])

  const opts = {}

  if (userToken?.token) {
    opts.headers = { 'Authorization': 'Bearer ' + userToken.token }
  }

  let misArticulos
  misArticulos = useFetch('http://localhost:3000/articles/sold', opts)
  if (!userToken?.token) misArticulos = [undefined]

  let datosArticulos
  datosArticulos = useFetch('http://localhost:3000/trading//userSeller', opts)
  if (!userToken?.token) datosArticulos = undefined

  console.log(datosArticulos)

  return (
    <div className='soldBuy'>
      {
        !misArticulos.length ?
        <span>NO TIENES PRODUCTOS VENDIDOS</span>
        :
        misArticulos?.map(articulo =>
            <div key={articulo.id} className="MyArticle">
                <img className="image" src={`http://localhost:3000${articulo.photo.replace('./', '/')}`} alt={articulo.name} />
                <div>
                  <h3>{articulo.name}</h3>
                  <div className="textMyArticle">
                      <h4>{articulo.price} euros</h4>
                  </div>
                </div>
            </div>
        )}
    </div>
  )
}

const ArticlesBuyerWrapper = () =>
  <Suspense fallback={<Loading />}>
    <ArticlesSold />
  </Suspense>

export default ArticlesBuyerWrapper