
import React, { useState } from 'react'


function Registre() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  const [avatar, setAvatar] = useState('')
  const [loading, setLoading] = useState(false)
  const [verifica, setVerifica] = useState(false)

  const api = 'http://localhost:3000/users/'

  const avatarURL= avatar && URL.createObjectURL(avatar)

  const user = {}
    user.username = name
    user.password = password
    user.email = email
    user.location = ubicacion

  const handleSubmit = async e => {
      setLoading(true)
    e.preventDefault()

    if (name && password && ubicacion) {
      const fd = new FormData()

      fd.append('avatar', avatar)
      fd.append('user', JSON.stringify(user))
      const res = await fetch(api, {
        method: 'POST',
        body: fd
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setLoading(false)
        setVerifica(true)
      } else {
        console.log(res)
        setLoading(false)
      }
      setEmail('')
      setName('')
      setPassword('')
      setUbicacion('')
    }
  }
  return (
            loading ?
                <div className='reloj-loading'>
                </div>
                :
                verifica ?
                  <div className='verifica'>
                    <h1>VERIFICA EL EMAIL PARA EMPEZAR A COMPRAR</h1>
                  </div>
                  :
                  <fieldset>
                    <legend>Registrarse</legend>
                    <form onSubmit={handleSubmit} className='login'>
                        <label>
                        Email:
                        <br/>
                        <input required type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                        Nombre:
                        <br/>
                        <input required  name="name" value={name} onChange={e => setName(e.target.value)} />
                        </label>
                        <label>
                        Contraseña:
                        <br/>
                        <input required type="password" name="password" value={password}  onChange={e => setPassword(e.target.value)} />
                        </label>
                        <label>
                        Ubicacion:
                        <br/>
                        <input required name="ubicacion" value={ubicacion}  onChange={e => setUbicacion(e.target.value)} />
                        </label>
                        <label>
                          {!avatarURL ?
                          <div>
                            <div className="button">📷</div>
                            <input type="file" onChange={e => setAvatar(e.target.files[0])} accept="image/x-png,image/gif,image/jpeg" />
                          </div>
                          :
                          <div className='avatarDiv'>
                            <img className='avatar avatarRegistre' src={avatarURL} alt='avatar'/>
                            <input type="file" onChange={e => setAvatar(e.target.files[0])} accept="image/x-png,image/gif,image/jpeg" />
                          </div>}
                        </label>
                        <div className='enviarRegistro'>
                            <button>Enviar</button>
                        </div>
                    </form>
                </fieldset>
    )
  }

  export default Registre