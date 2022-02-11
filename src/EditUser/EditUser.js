import { Routes, Route, Navigate } from 'react-router-dom'
import React, { useState } from 'react'
import './EditUser.css'
import { useSelector } from 'react-redux'



function EditUser() {

  const datos = useSelector(d => d.userDatos)
  const [datosUsuario, setDatosUsuario] = useState(datos)
  const [name, setName] = useState(datosUsuario[0].username)
  const [surname, setSurname] = useState(datosUsuario[0].surname)
  const [email, setEmail] = useState(datosUsuario[0].email)
  const [password, setPassword] = useState(datosUsuario[0].password)
  const [newPassword, setNewPassword] = useState(datosUsuario[0].newPassword)
  const [address, setAddress] = useState(datosUsuario[0].location)
  const [provinces, setProvinces] = useState(datosUsuario[0].provinces)
  const [telephone, setTelephone] = useState(datosUsuario[0].telephone)
  const [idCard, setIdCard] = useState(datosUsuario[0].idCard)
  const [birth, setBirth] = useState(datosUsuario[0].birth)
  const [loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState('')
  const [show, setShow] = useState(false)

  console.log(datos)

  const switchShow = () => setShow(!show)

  const handlePhoto = async e=> {
    e.preventDefault()
    setAvatar(e.target.files[0])
  }
  const avatarURL= avatar && URL.createObjectURL(avatar)



  const user = {}
    user.username = name
    user.surname = surname
    user.email = email
    user.password = password
    user.newPassword = newPassword
    user.location = address
    user.telephone = telephone
    user.idCard = idCard
    user.birth = birth

  
    const handleSubmit = async e => {
      setLoading(true)
    e.preventDefault()
      const fd = new FormData()
      fd.append('avatar', avatar)
      fd.append('user', JSON.stringify(user))
      const res = await fetch('http://localhost:3000/user/editUser', {
        method: 'POST',
        body: fd
      })
      const data = await res.json()
      if (res.ok) {
        console.log(data)
        setLoading(false)
      } else {
        console.log(data.error)
        setLoading(false)
      }
    } 

    

  console.log(avatar)
  // if (!user) {
  //   return <Navigate to="../user/Registre" />
  // }
  return (
    <div className="datauser">
      <h1>Mi Perfil</h1>
      <div className='userphoto'>
        {avatarURL ?
        <img className='avatar avatarRegistre' src={avatarURL} alt='avatar'/>
        :
        <img className='photo' src={`http://localhost:3000${datosUsuario[0].avatar.replace('./', '/')}`} alt={datosUsuario[0].username} />}
        <label>
          <div type='button' className='changephoto'>Cambiar foto</div> 
          <input type="file" onChange={handlePhoto} accept="image/x-png,image/gif,image/jpeg" />
        </label>
        
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          *Nombre
          <input name="name" value={name} required onChange={e => setName(e.target.value)}></input>
        </label>
        <label>
          *Apellidos
          <input name="surname" value={surname} required onChange={e => setSurname(e.target.value)}></input>  
        </label>
        <label>
          *Email
          <input name="email" value={email} type="email" required onChange={e => setEmail(e.target.value)}></input>
        </label>
        <label>
          *Contraseña
          <input name="password" value={password} type="password" required onChange={e => setPassword(e.target.value)}></input>
        </label>
        <label >
          *Nueva Contraseña
          <input name="newPassword" value={newPassword} type={show ? 'text' : 'password'} required onChange={e => setNewPassword(e.target.value)}></input>
          <button onClick={switchShow}>{show ? 'Ocultar' : 'Mostrar'}</button>
        </label>
        <label>
          *Dirección
          <input name="address" value={address} required onChange={e => setAddress(e.target.value)}></input>
          <label>
            <select name="provinces" value={provinces} required onChange={e => setProvinces(e.target.value)}>
              <option>Provincia</option>
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
        </label>
        <label>
          *Teléfono
          <input name="telephone" value={telephone} required onChange={e => setTelephone(e.target.value)}></input>
        </label>
        <label>
          *NIF/NIE
          <input name="idCard" value={idCard} required onChange={e => setIdCard(e.target.value)}></input>
        </label>
        <label>
          Fecha de Nacimiento
          <input name="birth" value={birth} onChange={e => setBirth(e.target.value)}></input>
        </label>
        <button className='savedata'>Guardar datos</button>
      </form>
      

    </div>
  )
}

export default EditUser