import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './MyActivity.css'
import { useSelector } from 'react-redux'
import ArticlesBuyer from './ArticlesBuyer'
import ArticlesSold from './ArticlesSold'



function MyActivity() {

  const userToken = useSelector(s => s.user)
  const navigate = useNavigate()

  useEffect(() => {
    !userToken && navigate('user/register')
  }, [userToken, navigate])

  const [show, setShow] = useState(true)
  console.log(show)

  return (
    <div className="datauser-activity">
      <div className='title-activity'>
        <Link className='casita' to={'/'} title='Pàgina principal'>⌂ Volver al Home</Link>
        <h1>Mi Actividad </h1>
      </div>
      <div className='info-activity'>
        <div className='info-title-activity'>
          <div className='boySold-activity'>
            <h2 className={show && 'mirando-activity'} onClick={(e) => setShow(!show)}> Productos que quiero vender</h2>
          </div>
          <div className='boySold-activity'>
            <h2 className={!show && 'mirando-activity'} onClick={(e) => setShow(!show)}>Productos que quiero comprar</h2>
          </div>
        </div>
        { show &&
          <div >
              <ArticlesBuyer setShow={setShow}/>
          </div>}
          { !show &&
          <div>
              <ArticlesSold/>
          </div>}
      </div>
    </div>
  )
}

export default MyActivity