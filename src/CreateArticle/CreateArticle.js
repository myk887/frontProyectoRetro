
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './CreateArticle.css'


function CreateArticle() {
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [photo, setPhoto] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [verifica, setVerifica] = useState(false)
  const [id, setId] = useState('')
  const userToken = useSelector(s => s.user)
  const datos = useSelector(d => d.userDatos)
  const navigate = useNavigate()

  const api = 'http://localhost:3000/articles/'

  const photoUrl= photo && URL.createObjectURL(photo)

  const article = {}
    article.name = name.charAt(0).toUpperCase() + name.slice(1)
    article.description = description.charAt(0).toUpperCase() + description.slice(1)
    article.category = category
    article.price = price
    article.photo = photo
    article.location = datos[0].location
    article.province = datos[0].province

  const handleSubmit = async e => {
      setLoading(true)
    e.preventDefault()

    if (name && description && price && photo && category) {
      const fd = new FormData()

      fd.append('photo', photo)
      fd.append('article', JSON.stringify(article))
      const res = await fetch(api, {
        method: 'POST',
        body: fd,
        headers:{Authorization: 'Bearer ' + userToken?.token}
      })
      if (res.ok) {
        const data = await res.json()
        setId(data)
        // window.location.reload(true);
        setLoading(false)
        setVerifica(true)
      } else {
        console.log(res)
        setLoading(false)
        setError(res.status)
      }
      setCategory('')
      setName('')
      setDescription('')
      setPrice('')
      setPhoto('')
    }
  }
  if (!userToken && !datos) navigate('/')
  return (
            loading ?
                <div className='reloj-loading'>
                </div>
                :
                verifica ?
                  <div className='createarticle-created-article'>
                    <h1 className="createarticle-created-text">Producto creado</h1>
                    <a href={'/article/' + id.id} className="createarticle-created-link"> Ver producto</a>
                  </div>
                  :
                  <div className="createarticle-body">
                    <p className='error'>{error == 401 && 'Verifica que esta todo bien escrito'|| error == 404 && 'El articulo no fue creado correctamente' || error == 500 && 'Hubo un error'}</p>
                    <h1 className="createarticle-title">Crear un anuncio</h1>
                    <fieldset>
                    <form onSubmit={handleSubmit} className='createarticle-form'>
                        <label>
                        ¿De qué artículo se trata?
                        <br/>
                        <input required  name="name" value={name} onChange={e => setName(e.target.value)} />
                        </label>
                        <label>
                        Descripción breve:
                        <br/>
                        <textarea name="description" cols="50" rows="5" required value={description}  onChange={e => setDescription(e.target.value)} />
                        </label>
                        <label>
                        Precio (€):
                        <br/>
                        <input required name="price" value={price}  onChange={e => setPrice(e.target.value)} />
                        </label>
                        <select required name="select" onChange={e => setCategory(e.target.value)}>
                          <option value="" disabled selected>Elige categoria...</option>
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
                          <div className="createarticle-loadphoto">
                            <div className="createarticle-loadphoto-link">📷 Añadir fotografía</div>
                            <input required name='file' type="file" onChange={e => setPhoto(e.target.files[0])} accept="image/x-png,image/gif,image/jpeg" />
                          </div>
                          :
                          <div className='photoDiv'>
                            <img className='photo photoRegister' src={photoUrl} alt='phot'/>
                            <input type="file" onChange={e => setPhoto(e.target.files[0])} accept="image/x-png,image/gif,image/jpeg" />
                          </div>}
                        </label>
                        <div>
                            <button className='createarticle-sendbutton'>Enviar</button>
                        </div>
                    </form>
                </fieldset>
              </div>
    )
  }

  export default CreateArticle