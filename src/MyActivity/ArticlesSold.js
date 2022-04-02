import { useNavigate } from 'react-router-dom'
import React, { Suspense, useEffect, useState } from 'react'
import './MyActivity.css'
import { useSelector } from 'react-redux'
import  useFetch  from "fetch-suspense"
import Loading from '../Loading'


function ArticlesSold() {
  const userToken = useSelector(s => s.user)
  const navigate = useNavigate()
  const [vote, setVote] = useState(0)

  useEffect(() => {
    !userToken && navigate('user/register')
  }, [userToken, navigate])

  const opts = {}

  if (userToken?.token) {
    opts.headers = { 'Authorization': 'Bearer ' + userToken.token }
  }
  let datosArticulos
  datosArticulos = useFetch('http://localhost:3000/trading/userBuyer', opts)
  if (!userToken?.token) datosArticulos = undefined

  // const [{username}] = useFetch('http://localhost:3000/users/name/' + datosArticulos[0][0].idUser)
  // console.log(username)

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
  const handleSubmit = async (e, {idSeller, articleId}) => {
    e.preventDefault()

    const res = await fetch('http://localhost:3000/votes/idVotedUser/votes', {
      method: 'POST',
      body: JSON.stringify({
        idSeller,
        vote,
        articleId
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken?.token
      }
    })
    const res2 = await fetch('http://localhost:3000/trading/voted', {
      method: 'POST',
      body: JSON.stringify({
        idSeller,
        articleId
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken?.token
      }
    })
    if (res.ok) {
      console.log(res)
    } else {
      console.log(res)
    }
    if (res2.ok) {
      window.location.reload(true)
    } else {
      console.log(res2)
    }
  }

  return (
    <div className='soldBuy-activity'>
      {
        !datosArticulos[0].length ?
        <span>NO TIENES PRODUCTOS EN PROCESO DE COMPRA</span>
        :
        datosArticulos[0]?.map((articulo, i) =>
          <div key={articulo.id} className="comercio-activity">
            <div  className="MyArticle-activity">
                <img className="image-activity" src={`http://localhost:3000${articulo.photo.replace('./', '/')}`} alt={articulo.name} />
                <div>
                  <h3>{articulo.name}</h3>
                  <div className="textMyArticle-activity">
                      <h4>{articulo.price} €</h4>
                  </div>
                </div>
            </div>
            <div className='estado-activity'>
              {(datosArticulos[1][i].buy === 1) && articulo.buyerId && <div> <h2>Estado de la venta</h2> <span>✅ Vendido</span> </div>}
              {(datosArticulos[1][i].buy === 1) && !articulo.buyerId && <div><h2>Día de compra</h2> <p>{datosArticulos[1][i].saleDate?.split('Z')[0].split('T')[0]}{' '}{datosArticulos[1][i].saleDate?.split('Z')[0].split('T')[1].slice(0, -4)}</p> </div>}
              {(datosArticulos[1][i].buy === 1) && !articulo.buyerId && new Date(datosArticulos[1][i].saleDate) < new Date() && handleBuy({articleId: articulo.id})}
              {(datosArticulos[1][i].buy === 1) && articulo.buyerId && (datosArticulos[1][i].voted === null) &&
                  <form onSubmit={(e) => handleSubmit(e,{idSeller:articulo.idUser, articleId: articulo.id})}>
                    <h3>Puntúa al vendedor ⬇</h3>
                    <p class="clasificacion">
                        <input id="radio1" type="radio" name="estrellas" value="5" onChange={e => setVote(e.target.value)}/>
                        <label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4" onChange={e => setVote(e.target.value)}/>
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3" onChange={e => setVote(e.target.value)}/>
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2" onChange={e => setVote(e.target.value)}/>
                        <label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" onChange={e => setVote(e.target.value)}/>
                        <label for="radio5">★</label>
                    </p>
                    <button className='buttonPuntua-activity'>Enviar puntuación</button>
                  </form>}
              {(datosArticulos[1][i].buy === 0) && <div> <h2>Estado de la venta</h2> <span>❌ Rechazado</span> </div>}
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