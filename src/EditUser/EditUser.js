import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './EditUser.css'
import { useSelector } from 'react-redux'
import Loading from '../Loading'


function EditUser() {

  const datos = useSelector(d => d.userDatos)
  const userToken = useSelector(s => s.user)
  const navigate = useNavigate()

  useEffect(() => {
    !userToken && navigate('user/register')
  }, [userToken, navigate])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [address, setAddress] = useState('')
  const [provinces, setProvinces] = useState(datos[0].province)
  const [loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState(false)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(2)

  const switchShow = (e) => {
    e.preventDefault()
    setShow(!show)
  }
  const switchShow2 = (e) => {
    e.preventDefault()
    setShow2(!show2)
  }

  const handlePhoto = async e=> {
    e.preventDefault()
    setAvatar(e.target.files[0])
  }
  const avatarURL= avatar && URL.createObjectURL(avatar)

  const user = {}
    user.username = name
    user.email = email
    user.location = address
    user.province = provinces

    const handleSubmit = async e => {
      setLoading(true)
      e.preventDefault()

      const fd = new FormData()
      fd.append('avatar', avatar)
      fd.append('user', JSON.stringify(user))
      const res = await fetch('http://localhost:3000/users/editUser', {
        method: 'PUT',
        body: fd,
        headers: {'Authorization': 'Bearer ' + userToken?.token}
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setLoading(false)
        alert('Cambios guardados')
      } else {
        console.log(res.status)
        alert('Hubo un error' + res.statusText)
        setLoading(false)
      }
    }
    const handleSubmitPass = async e => {
      setLoading(true)
      e.preventDefault()
      if (password && newPassword) {
          console.log(password, newPassword)
          const res = await fetch('http://localhost:3000/users/change/password', {
          method: 'PATCH',
          body: JSON.stringify({"currentPassword": password, "passwordNew": newPassword}),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken?.token
          }
        })
        if (res.ok) {
          setLoading(false)
          alert('Contraseña cambiadas')
        } else {
          console.log(res.status)
          alert('Hubo un error' + res.statusText)
          setLoading(false)
        }
      }
    }

  return (
    loading ? <div className="edituser-data"><Loading /></div> :

    <div className="edituser-data">

      <div className='edituser-casita'>
        <Link className='edituser-casita-link' to={'/'} title='Pàgina principal'><h4>⌂ Volver al home</h4></Link>
      </div>

      <div className='edituser-info'>

      { show3 !== 3 && <div className='edituser-userphoto'>
            {avatarURL ?
            <img className='edituser-avatar-photo' src={avatarURL} alt='avatar'/>
            :
            <img className='edituser-avatar-photo' src={`http://localhost:3000${datos[0].avatar.replace('./', '/')}`} alt={datos[0].username} />}
            <label>
            <div type='button' className='edituser-changephoto-button'>Cambiar foto</div>
            <input type="file" onChange={handlePhoto} accept="image/x-png,image/gif,image/jpeg" />
            </label>
        </div> }

        {show3 &&
        <div className="edituser-userinfo">
          { show3 !== 2 ?
            <p className="edituser-changepassword" onClick={(e) => setShow3(2)}> ✎ Volver a Mi Perfil</p>
            :
            <form className='edituser-form-edit' onSubmit={handleSubmit}>
              <label>
              <span>Nombre: </span>
              <input name="name" value={name} required placeholder={datos[0].username}  onChange={e => setName(e.target.value)}></input>
              </label>
              <label>
              <span>Email: </span>
              <input name="email" value={email} type="email" required placeholder={datos[0].email}  onChange={e => setEmail(e.target.value)}></input>
              </label>
              <label>
              <span>Ciudad: </span>
              <input name="address" value={address} required placeholder={datos[0].location} onChange={e => setAddress(e.target.value)}></input>
              </label>
              <label>
                <select className="provinces" name="provinces" value={provinces} required  onChange={e => setProvinces(e.target.value)}>
                  <option value=''>{provinces}</option>
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
              </label>
              <button className='edituser-savedatabutton'>Guardar datos</button>
          </form>}

          { show3 !== 3 ?
          <p className="edituser-changepassword" onClick={(e) => setShow3(3)}>✎ Cambiar contraseña</p>
          :
          <fieldset className="edituser-changepassword-form">
            <form className='edituser-form-edit' onSubmit={handleSubmitPass}>
              <label>
                  Contraseña actual
                  <input name="password" value={password} required type={show ? 'text' : 'password'} onChange={e => setPassword(e.target.value)}></input>
                  <span className='edituser-showpass' onClick={switchShow}>{show ? 'Ocultar' : 'Mostrar'}</span>
                  </label>
                  <label >
                  Nueva Contraseña
                  <input name="newPassword" value={newPassword} required type={show2 ? 'text' : 'password'}  onChange={e => setNewPassword(e.target.value)}></input>
                  <span className='edituser-showpass' onClick={switchShow2}>{show2 ? 'Ocultar' : 'Mostrar'}</span>
              </label>
              <button className='edituser-changepass-button'>Cambiar Contraseña</button>
            </form>
          </fieldset>}
        </div>}
      </div>
    </div>
  )
}

export default EditUser