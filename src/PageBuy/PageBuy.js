import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './PageBuy.css'
import { useSelector } from 'react-redux'
import ArticlesBuyer from './ArticlesBuyer'
import ArticlesSold from './ArticlesSold'



function PageBuy() {

  const userToken = useSelector(s => s.user)
  const navigate = useNavigate()

  useEffect(() => {
    !userToken && navigate('user/registre')
  }, [userToken, navigate])

  const [show, setShow] = useState(false)

  return (
    <div className="datauser">
      <div className='title'>
        <Link className='casita' to={'/'} title='Pàgina principal'>⌂</Link>
        <h1>Mi Actividades </h1>
      </div>
      <div className='info'>
          <div className='boySold'>
            <p onClick={(e) => setShow(!show)}> Productos Comprados</p>
            { show &&
            <div >
                <ArticlesBuyer/>
            </div>}
          </div>
          <div className='boySold'>
            <p onClick={(e) => setShow(!show)}>Productos vendidos</p>
            { !show &&
            <div>
                <ArticlesSold/>
            </div>}
          </div>
      </div>
    </div>
  )
}

export default PageBuy