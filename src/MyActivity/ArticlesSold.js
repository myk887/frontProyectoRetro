import { useNavigate } from 'react-router-dom'
import React, { Suspense, useEffect } from 'react'
import './MyActivity.css'
import { useSelector } from 'react-redux'
import  useFetch  from "fetch-suspense"
import Loading from '../Loading'


function ArticlesSold() {
  const userToken = useSelector(s => s.user)
  const navigate = useNavigate()

  useEffect(() => {
    !userToken && navigate('user/registre')
  }, [userToken, navigate])

  const opts = {}

  if (userToken?.token) {
    opts.headers = { 'Authorization': 'Bearer ' + userToken.token }
  }
  let datosArticulos
  datosArticulos = useFetch('http://localhost:3000/trading/userBuyer', opts)
  if (!userToken?.token) datosArticulos = undefined

  const handleBuy = async ({articleId}) => {
    console.log('hola')
    const res = await fetch('http://localhost:3000/articles/sold', {
      method: 'POST',
      body: JSON.stringify({articleId}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken?.token
      }
    })
    if (res.ok) {
      window.location.reload(true)
    } else {
      console.log(res)
    }
  }

  return (
    <div className='soldBuy'>
      {
        !datosArticulos[0].length ?
        <span>NO TIENES PRODUCTOS COMPRADOS</span>
        :
        datosArticulos[0]?.map((articulo, i) =>
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
            <div className='estado'>
              {(datosArticulos[1][i].buy === 1) && articulo.buyerId && <div> <h2>Estado de la venta</h2> <span>✅</span> </div>}
              {(datosArticulos[1][i].buy === 1) && !articulo.buyerId && <div><h2>Día de compra</h2> <p>{datosArticulos[1][i].saleDate?.split('Z')[0].split('T')[0]}{' '}{datosArticulos[1][i].saleDate?.split('Z')[0].split('T')[1].slice(0, -4)}</p> </div>}
              {(datosArticulos[1][i].buy === 1) && !articulo.buyerId && new Date(datosArticulos[1][i].saleDate) < new Date() && handleBuy({articleId: articulo.id})}
              {(datosArticulos[1][i].buy === 1) && articulo.buyerId && <div> <h1>Puntua</h1></div>}
              {(datosArticulos[1][i].buy === 0) && <span>❌</span>}
              {(datosArticulos[1][i].buy === null) && <div> <h2>Estado de la venta</h2> <span>Pendiente de respuesta</span> </div>}
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