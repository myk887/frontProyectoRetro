import { useNavigate } from 'react-router-dom'
import React, { Suspense, useEffect } from 'react'
import './PageBuy.css'
import { useSelector } from 'react-redux'
import  useFetch  from "fetch-suspense"
import Loading from '../Loading'



function ArticlesBuyer() {

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
  misArticulos = useFetch('http://localhost:3000/articles/purchased', opts)
  if (!userToken?.token) misArticulos = undefined

  return (
    <div className='soldBuy'>
      {
        !misArticulos.length ?
        <span>NO TIENES PRODUCTOS COMPRADOS</span>
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
    <ArticlesBuyer />
  </Suspense>

export default ArticlesBuyerWrapper