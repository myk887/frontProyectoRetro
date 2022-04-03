
import { useEffect, useState } from 'react'
import './Login.css'
import Modal from './Modal'
import {  Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import account from './images//logos/account.png'


const perfil = async ({ token }) => {
  const res = await fetch(`http://localhost:3000/users/profile`, {
    headers: new Headers({
      "Authorization": `Bearer ${token}`
    })
  })
  let data = await res.json()

  if (res.ok) {
    return data
  } else {
    return data.error
  }
}

function Session() {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(s => s.user)
  const datos = useSelector(d => d.userDatos)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [usuario, setUsuario] = useState(user)
  const [datosUsuario, setDatosUsuario] = useState(datos)

  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    const res = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    if (res.ok) {
      const data = await res.json()
      dispatch({ type: 'login', user: data })
      setShow(false)
      const datos = await perfil(data)
      dispatch({ type: 'datos', datos })
      setLoading(false)
    } else {
      setError({ statusText: res.statusText })
      setLoading(false)
      setShow(false)
      navigate('/user/register')
    }
  }
  useEffect(() => {
    setUsuario(user)
    setDatosUsuario(datos)
  }, [user, datos])
  const cerrarSesion = () => {
    localStorage.clear()
    dispatch({ type: 'login'})
    dispatch({ type: 'datos'})
    setUsuario(null)
  }
  return (
    usuario ?
      (datosUsuario &&
        <div className='login-perfil'>
          <img className='login-avatar-image' src={`http://localhost:3000${datosUsuario[0].avatar.replace('./', '/')}`} alt={datosUsuario[0].username}></img>
          <div class="login-dropdown">
            <button className='login-buttonUsername'>{datosUsuario[0].username}</button>
            <div class="dropdown-content">
            <Link to={'user/edit'}>Mi Perfil</Link>
            <Link to={'user/articles'}>Mis Productos</Link>
            <Link to={'user/actividad'}>Mi Actividad</Link>
            <Link to={'/'} onClick={cerrarSesion}>Cerrar Sesion</Link>
            </div>
          </div>
      </div>)
      :
      <div className='login-perfil'>
        <img src={account} alt="account logo" className="login-avatar-image"/>
        <button onClick={() => setShow(!show)} className="login-buttonUsername">Inicia sesión</button>
        <Modal show={show} setShow={setShow}>
          {loading ?
            <div className='reloj-loading'></div>
            :
            <fieldset>
              <form onSubmit={handleSubmit} className='login-form'>
                <label className="login-user-label">
                  <span>Usuario: </span>
                  <input required type="email" name="email" className="login-user-input"
                    value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label className="login-user-label">
                  <span>Contraseña: </span>
                  <input required type="password" name="password" className="login-user-input"
                    value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button>Identificarme</button>
              </form>
              {error && <div className="error">{error.statusText}</div>}
            </fieldset>}
          <button>
            <NavLink to='./user/register' onClick={() => setShow(false)}>Abrir una cuenta</NavLink>
          </button>
        </Modal>
      </div>
  )
}

export default Session