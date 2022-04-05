
import  useFetch  from "fetch-suspense"
import React, { Suspense, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './ModifyArticle.css'
import Loading from '../Loading'


function ModifyArticle() {
  const {idActuallyArticle} = useParams()
  const actuallyArticle = useFetch('http://localhost:3000/articles/' + idActuallyArticle)
  const userToken = useSelector(s => s.user)
  const datos = useSelector(d => d.userDatos)
  const [category, setCategory] = useState('')
  const [name, setName] = useState(actuallyArticle.name)
  const [description, setDescription] = useState(actuallyArticle.description)
  const [price, setPrice] = useState(actuallyArticle.price)
  const [photo, setPhoto] = useState('')
  const [loading, setLoading] = useState(false)
  const [verifica, setVerifica] = useState(false)
  const navigate = useNavigate()

  const api = 'http://localhost:3000/articles/' + idActuallyArticle

  const photoUrl= photo && URL.createObjectURL(photo)

  const article = {}
    article.name = name.charAt(0).toUpperCase() + name.slice(1)
    article.description = description.charAt(0).toUpperCase() + description.slice(1)
    article.category = category
    article.price = price
    article.photo = photo

  const handleSubmit = async e => {
      setLoading(true)
    e.preventDefault()

    if (name || description || price || photo || category) {
      const fd = new FormData()

      fd.append('photo', photo)
      fd.append('article', JSON.stringify(article))
      const res = await fetch(api, {
        method: 'PUT',
        body: fd,
        headers:{Authorization: 'Bearer ' + userToken?.token}
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
    }
  }
  if (!userToken && !datos) navigate('/')
  return (
            loading ?
                <div className='reloj-loading'>
                </div>
                :
                verifica ?
                  <div className='modifyarticle-verifica'>
                    <h1>Producto modificado</h1>
                    <Link to={'/article/' + idActuallyArticle}> Ver producto</Link>
                  </div>
                  :
                  <fieldset className='modifyarticle-container'>
                    <h1>Modificar articulo</h1>
                    <form onSubmit={handleSubmit} className='modifyarticle-form'>
                        <label>
                        Nombre:
                        <br/>
                        <input  name="name" value={name} onChange={e => setName(e.target.value)} />
                        </label>
                        <label>
                        Descripción:
                        <br/>
                        <input type="text" name="description" value={description}  onChange={e => setDescription(e.target.value)} />
                        </label>
                        <label>
                        Precio:
                        <br/>
                        <input name="price" value={price}  onChange={e => setPrice(e.target.value)} />
                        </label>
                        <select name="select" onChange={e => setCategory(e.target.value)}>
                          <option value="" disabled selected>{actuallyArticle.category}</option>
                          <option value="moviles" >Moviles </option>
                          <option value="fijos">Fijos </option>
                          <option value="cintas">cintas </option>
                          <option value="vinilos" >vinilos </option>
                          <option value="accesorios">accesorios</option>
                          <option value="monitores" >monitores </option>
                          <option value="ordenadores">ordenadores </option>
                          <option value="teclados">teclados </option>
                          <option value="camaraFotos" >camaraFotos </option>
                          <option value="camaraVideos">camaraVideos</option>
                          <option value="televisores" >televisores </option>
                          <option value="cartuchos">cartuchos </option>
                          <option value="consolas">consolas </option>
                          <option value="cables" >cables </option>
                          <option value="despertadores">despertadores</option>
                          <option value="gps" >gps </option>
                          <option value="librosElectronicos">librosElectronicos </option>
                          <option value="maquinasEscribir">maquinasEscribir </option>
                          <option value="tdt" >tdt </option>
                          <option value="altavoces">altavoces</option>
                          <option value="mp3" >mp3 </option>
                          <option value="radios">radios </option>
                          <option value="tocadiscos">tocadiscos </option>
                          <option value="walkman" >walkman </option>
                        </select>
                        <label>
                          {!photoUrl ?
                          <div>
                            <p className="modifyarticle-changephoto">Cambiar foto:</p>
                            <img className='modifyarticle-photo' src={`http://localhost:3000${actuallyArticle.photo.replace('./', '/')}`} alt={actuallyArticle.name}></img>
                            <input name='file' type="file" onChange={e => setPhoto(e.target.files[0])} accept="image/x-png,image/gif,image/jpeg"/>
                          </div>
                          :
                          <div className='photoDiv'>
                            <img className='modifyarticle-photo' src={photoUrl} alt='phot'/>
                            <input type="file" onChange={e => setPhoto(e.target.files[0])} accept="image/x-png,image/gif,image/jpeg" />
                          </div>}
                        </label>
                        <div>
                            <button className='modifyarticle-button'>Guardar cambios</button>
                        </div>
                    </form>
                </fieldset>
    )
  }

  const ModifyArticleWrapper = () =>
  <Suspense fallback={<Loading />}>
    <ModifyArticle />
  </Suspense>

    export default ModifyArticleWrapper