import useFetch from 'fetch-suspense'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import './Products.css'


function Products({products}) {
    const [step, setStep] = useState(0)
    const [order, setOrder] = useState(0)
    let productsOrder
    if (order === '1') productsOrder = products.sort(function(a, b){return a.price - b.price})
    if (order === '2') productsOrder = products.sort(function(a, b){return b.price - a.price})
    if (order === '3') productsOrder = products.sort(function(a, b){
      return a.location- b.location
    })
    else productsOrder = products

    const perPage = 3
    const pags = Math.ceil(products.length / perPage)
    const handlePrev = () => setStep(step > 0 ? step - 1 : pags - 1)
    const handleNext = () => setStep((step + 1) % pags)

    return (
      <div className='container'>
        <select name="select" onChange={e => setOrder(e.target.value)}>
            <option value="" disabled selected>Ordenar por..</option>
            <option value="1" >Precio menor a mayor </option>
            <option value="2" >Precio mayor a menor </option>
            <option value="3" >Ciudades alfabeticamente </option>
        </select>
        {productsOrder.slice(step * perPage, (step + 1) * perPage).map(product =>
        <div key={product.id} className='product'>
            <img src={`http://localhost:3000${product.photo.replace('./', '/')}`} alt={product.name} className='photo'/>
            <div className='content'>
                <h1>{product.name}</h1>
                <div className='description'>
                    <p>{product.description}</p>
                    <div className='spanButton'>
                        <span> Precio: {product.price}€</span>
                        <button type='button' className='irCompra'><Link to={'/article/' + product.id} className='enlace'>ver producto</Link></button>
                    </div>
                </div>
            </div>
        </div>
        )}
        <div className='buttons'>
          <div onClick={handlePrev} className='previous'>
          ⇦
          </div>
          {' '}
          <div onClick={handleNext} className='next'>
          ⇨
          </div>
        </div>
      </div>
    )
}

const ProductsWrapper = ({products}) =>
  <Suspense fallback={<Loading />}>
    <Products products={products}/>
  </Suspense>

export default ProductsWrapper