import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './MyActivity.css'
import { useSelector } from 'react-redux'
import Loading from '../Loading'
import ArticlesBuyer from './ArticlesBuyer'
import ArticlesSold from './ArticlesSold'



function MyActivity() {

  const datos = useSelector(d => d.userDatos)
  const userToken = useSelector(s => s.user)
  const navigate = useNavigate()

  useEffect(() => {
    !userToken && navigate('user/registre')
  }, [userToken, navigate])

  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  return (
    loading ? <div className="datauser"><Loading /></div> :
    <div className="datauser">
      <div className='title'>
        <Link className='casita' to={'/'} title='Pàgina principal'>⌂</Link>
        <h1>Mi Actividades </h1>
      </div>
      <div className='info'>
          <div className='boySold'>
            <p onClick={(e) => setShow(!show)}> Productos en compra</p>
            { show &&
            <div >
                <ArticlesBuyer/>
            </div>}
          </div>
          <div className='boySold'>
            <p onClick={(e) => setShow(!show)}>Productos en venta</p>
            { !show &&
            <div>
                <ArticlesSold/>
            </div>}
          </div>
      </div>
    </div>
  )
}

export default MyActivity