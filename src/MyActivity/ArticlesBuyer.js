import { useNavigate } from 'react-router-dom'
import React, { Suspense, useEffect, useState } from 'react'
import './MyActivity.css'
import { useSelector } from 'react-redux'
import  useFetch  from "fetch-suspense"
import Loading from '../Loading'



function ArticlesBuyer(){

  const userToken = useSelector(s => s.user)
  const navigate = useNavigate()
  const [fecha, setFecha] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    !userToken && navigate('user/registre')
  }, [userToken, navigate])

  const opts = {}

  if (userToken?.token) {
    opts.headers = { 'Authorization': 'Bearer ' + userToken.token }
  }

  let datosArticulos
  datosArticulos = useFetch('http://localhost:3000/trading/userSeller', opts)
  if (!userToken?.token) datosArticulos = undefined


  const handleSubmit = async (e, {idArticle, idBuyer, location, province}) => {
    setLoading(true)
    e.preventDefault()
    const date = new Date(fecha)
    const date2 = new Date()
    if (date > date2) {
      const fechaHora = fecha.split('Z')[0].split('T')
      const accept = {
        idBuyer: idBuyer,
        articleId: idArticle,
        tradingInfo : {
            buy : 1,
            salePlace: location + ' ' + province,
            saleDate: fechaHora[0],
            saleHour: fechaHora[1] + ':00'
        }
      }
      const res = await fetch('http://localhost:3000/trading/userSeller', {
        method: 'POST',
        body: JSON.stringify(accept),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + userToken?.token
        }
      })
      if (res.ok) {
        window.location.reload(true);
        setLoading(false)
      } else {
        console.log(res)
        setLoading(false)
      }} else {
        alert('fecha incorrecta')
        setLoading(false)
      }
  }
  const handleSubmit2 = async (e, {idArticle, idBuyer, location, province}) => {
    setLoading(true)
    e.preventDefault()
    const noAccept = {
      idBuyer: idBuyer,
      articleId: idArticle,
      tradingInfo : {
          buy : 0,
          salePlace: location + ' ' + province,
      }
  }
    const res = await fetch('http://localhost:3000/trading/userSeller', {
      method: 'POST',
      body: JSON.stringify(noAccept),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken?.token
      }
    })
    if (res.ok) {
      window.location.reload(true);
      setLoading(false)
    } else {
      console.log(res)
      setLoading(false)
    }
  }

  return (
    loading ?
    <div className="datauser"><Loading /></div> :
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
              {(datosArticulos[1][i].buy === 1) && !articulo.buyerId && <div><h2>Día de compra</h2> <p>{datosArticulos[1][i].saleDate.split('Z')[0].split('T')[0]}{' '}{datosArticulos[1][i].saleDate.split('Z')[0].split('T')[1].slice(0, -4)}</p> </div>}
              {(datosArticulos[1][i].buy === 0) && <span>❌</span>}
              {(datosArticulos[1][i].buy === null) && <div>
                  <h2>Estado de la venta</h2>
                  <form onSubmit={(e)=> handleSubmit(e, {idArticle: articulo.id, idBuyer: datosArticulos[1][i].buyerId, location: articulo.location, province: articulo.province})}>
                    <label>
                      <input required type="datetime-local" name="horareunion" onChange={(e)=> setFecha(e.target.value)} />
                      <button>Poner hora</button>
                    </label>
                  </form>
                  <form onSubmit={(e)=> handleSubmit2(e, {idArticle: articulo.id, idBuyer: datosArticulos[1][i].buyerId, location: articulo.location, province: articulo.province})}>
                    <label>
                      <button>No quiero vender</button>
                    </label>
                  </form>
                </div>}
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