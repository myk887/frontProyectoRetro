
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Registre() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  const [province, setProvince] = useState('')
  const [avatar, setAvatar] = useState('')
  const [loading, setLoading] = useState(false)
  const [verifica, setVerifica] = useState(false)
  const userToken = useSelector(s => s.user)
  const datos = useSelector(d => d.userDatos)
  const navigate = useNavigate()

  const api = 'http://localhost:3000/users/'

  const avatarURL= avatar && URL.createObjectURL(avatar)

  const user = {}
    user.username = name
    user.password = password
    user.email = email
    user.location = ubicacion
    user.province = province

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
  useEffect(() => {
    userToken && navigate('/')
    datos && navigate('/')
  }, [userToken, datos, navigate])
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
                        <select name="provinces" required onChange={e => setProvince(e.target.value)}>
                          <option value=''>Provincia</option>
                          <option value="coruña">A Coruña/La Coruña</option>
                          <option value="araba">Araba/Alava</option>
                          <option value="albacete">Albacete</option>
                          <option value="alicante">Alicante</option>
                          <option value="almeria">Almería</option>
                          <option value="asturias">Asturias</option>
                          <option value="avila">Ávila</option>
                          <option value="badajoz">Badajoz</option>
                          <option value="barcelona">Barcelona</option>
                          <option value="bizkaia">Bizkaia/ Vizcaya</option>
                          <option value="burgos">Burgos</option>
                          <option value="caceres">Cáceres</option>
                          <option value="cadiz">Cádiz</option>
                          <option value="cantabria">Cantabria</option>
                          <option value="castellon">Castellón</option>
                          <option value="ciudadreal">Ciudad Real</option>
                          <option value="cordoba">Córdoba</option>
                          <option value="cuenca">Cuenca</option>
                          <option value="girona">Girona/Gerona</option>
                          <option value="granada">Granada</option>
                          <option value="guadalajara">Guadalajara</option>
                          <option value="gipuzkoa">Gipuzkoa/Guipúzcoa</option>
                          <option value="huelva">Huelva</option>
                          <option value="huesca">Huesca</option>
                          <option value="baleares">Islas Baleares</option>
                          <option value="jaen">Jaén</option>
                          <option value="rioja">La Rioja</option>
                          <option value="palmas">Las Palmas</option>
                          <option value="leon">León</option>
                          <option value="lleida">Lleida/ Lérida</option>
                          <option value="lugo">Lugo</option>
                          <option value="madrid">Madrid</option>
                          <option value="malaga">Málaga</option>
                          <option value="murcia">Murcia</option>
                          <option value="navarra">Navarra</option>
                          <option value="ourense">Ourense/ Orense</option>
                          <option value="palencia">Palencia</option>
                          <option value="pontevedra">Pontevedra</option>
                          <option value="salamanca">Salamanca</option>
                          <option value="tenerife">Santa Cruz de Tenerife</option>
                          <option value="segovia">Segovia</option>
                          <option value="sevilla">Sevilla</option>
                          <option value="soria">Soria</option>
                          <option value="tarragona">Tarragona</option>
                          <option value="teruel">Teruel</option>
                          <option value="toledo">Toledo</option>
                          <option value="valencia">Valencia</option>
                          <option value="valladolid">Valladolid</option>
                          <option value="zamora">Zamora</option>
                          <option value="zaragoza">Zaragoza</option>
                        </select>
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