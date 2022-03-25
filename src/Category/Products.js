import { useState } from 'react'
import { Link } from 'react-router-dom'
import NotFound from '../NotFound'
import './Products.css'


function Products({products}) {
    const [step, setStep] = useState(0)
    const [order, setOrder] = useState(0)
    const [order2, setOrder2] = useState(false)
    let productsOrder
    if (order === '1') productsOrder = products.sort(function(a, b){return a.price - b.price})
    if (order === '2') productsOrder = products.sort(function(a, b){return b.price - a.price})
    if (order2) productsOrder = products.filter(product => product.province === order2)
    else productsOrder = products

    const perPage = 3
    const pags = Math.ceil(productsOrder.length / perPage)
    const handlePrev = () => setStep(step > 0 ? step - 1 : pags - 1)
    const handleNext = () => setStep((step + 1) % pags)

    return (
      <div className='products-container'>

        <div className='products-filter'>

          <select name="select" onChange={e => setOrder(e.target.value)}>
              <option value="" disabled selected>Ordenar por..</option>
              <option value="1" >Precio menor a mayor </option>
              <option value="2" >Precio mayor a menor </option>
          </select>

          <select name="provinces" required onChange={e => setOrder2(e.target.value)}>
            <option value='' selected>Provincia</option>
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
        </div>

        {!productsOrder.length ?
        <NotFound/>
        :
        productsOrder?.slice(step * perPage, (step + 1) * perPage).map(product =>
          
        <div key={product.id} className='products-item-card'>
            <img src={`http://localhost:3000${product.photo.replace('./', '/')}`} alt={product.name} className='products-item-photo'/>
            <div className='products-card-content'>
                <h1>{product.name}</h1>
                <div className='products-item-description'>
                    <p>{product.description}</p>
                    <div className='products-spanButton'>
                        <span> Precio: {product.price}€</span>
                        <button type='button' className='products-buying-button'><Link to={'/article/' +product.id} className='enlace'>ver producto</Link></button>
                    </div>
                </div>
            </div>
        </div>
        )}
        <div className='products-arrows'>
          <div onClick={handlePrev} className='products-arrow-prev'>
          ⇦
          </div>
          {'  '}
          <div onClick={handleNext} className='products-arrow-next'>
          ⇨
          </div>
        </div>
      </div>
    )
}

export default Products