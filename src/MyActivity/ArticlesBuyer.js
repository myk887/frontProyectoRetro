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

  const handleSubmit = async (e, {idArticle, idBuyer, location, province}) => {
    setLoading(true)
    e.preventDefault()
    const fechaHora = fecha.split('Z')[0].split('T')
    console.log(fecha, fechaHora)
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
            <div className='estado'>
              {(datosArticulos[i].buy === 1) && articulo.buyerId && <div> <h2>Estado de la venta</h2> <span>✅</span> </div>}
              {(datosArticulos[i].buy === 1) && !articulo.buyerId && <div><h2>Día de compra</h2> <p>{datosArticulos[1].saleDate.split('Z')[0].split('T')[0]}{' '}{datosArticulos[1].saleDate.split('Z')[0].split('T')[1].slice(0, -4)}</p> </div>}
              {(datosArticulos[i].buy === 1) && !articulo.buyerId && datosArticulos[1].saleDate > new Date() && console.log('hola')}
              {(datosArticulos[i].buy === 0) && <span>❌</span>}
              {(datosArticulos[i].buy === null) && <div>
                  <h2>Estado de la venta</h2>
                  <form onSubmit={(e)=> handleSubmit(e, {idArticle: articulo.id, idBuyer: datosArticulos[i].buyerId, location: articulo.location, province: articulo.province})}>
                    <label>
                      <input required type="datetime-local" name="horareunion" onChange={(e)=> setFecha(e.target.value)} />
                      <button>poner horareunion</button>
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

/* {(datosArticulos.buy === 1) && <span>✅</span>}
              {(datosArticulos.buy === 1) && <p>{datosArticulos.saleDate}</p>}
              {(datosArticulos.buy === 0) && <span>❌</span>}
              {(datosArticulos.buy === null) && <span>Pendiente de respuesta</span>} */