import { useNavigate } from 'react-router-dom'
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import './MyActivity.css'
import { useSelector } from 'react-redux'
import  useFetch  from "fetch-suspense"
import Loading from '../Loading'

const fetchFun = async ({id, opts}) => {
  let res = await fetch('http://localhost:3000/articles/' + id, opts)
  let data = await res.json()
  return data
}


function ArticlesBuyer(){

  const datos = useSelector(d => d.userDatos)
  const userToken = useSelector(s => s.user)
  const navigate = useNavigate()
  const [array, setArry] = useState([])
  useEffect(() => {
    !userToken && navigate('user/registre')
  }, [userToken, navigate])

  const opts = {}

  if (userToken?.token) {
    opts.headers = { 'Authorization': 'Bearer ' + userToken.token }
  }

  let datosArticulos
  datosArticulos = useFetch('http://localhost:3000/trading//userSeller', opts)
  if (!userToken?.token) datosArticulos = undefined

  const misArticlesPromises = datosArticulos?.map(async (element, i) => {
    const article = await fetchFun({ id: element.idArtilce, opts})

    return article
  });
  let oa = []
  const id = misArticlesPromises?.map(async element => {
    const id = await element.then(v => v)
    oa.push(id)
    return oa
  })
  datosArticulos.length && !array.length && id[misArticlesPromises.length-1].then(v => setArry(v))
  useCallback(() => id[misArticlesPromises.length-1].then(v => setArry(v)), [id, setArry, misArticlesPromises])



  return (
    <div className='soldBuy'>
      {
        !array.length ?
        <span>NO TIENES PRODUCTOS COMPRADOS</span>
        :
        array.map((articulo, i) =>
          <div key={articulo.id} className="comercio">
            <div  className="MyArticle">
                <img className="image" src={`http://localhost:3000${articulo.photo.replace('./', '/')}`} alt={articulo.name} />
                <div>
                  <h3>{articulo.name}</h3>
                  <div className="textMyArticle">
                      <h4>{articulo.price} euros</h4>
                  </div>
                </div>
            </div>
              {(datosArticulos[i].buy === 1) && articulo.buyerId && <span>✅</span>}
              {(datosArticulos[i].buy === 1) && !articulo.buyerId && <p>{datosArticulos[i].saleDate}</p>}
              {(datosArticulos[i].buy === 0) && <span>❌</span>}
              {(datosArticulos[i].buy === null) && <span>Pendiente de respuesta</span>}
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

/* {(datosArticulos.buy === 1) && <span>✅</span>}
              {(datosArticulos.buy === 1) && <p>{datosArticulos.saleDate}</p>}
              {(datosArticulos.buy === 0) && <span>❌</span>}
              {(datosArticulos.buy === null) && <span>Pendiente de respuesta</span>} */