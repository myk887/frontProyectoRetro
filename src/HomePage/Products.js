import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'


function Products({products}) {
    const [step, setStep] = useState(0)
    const perPage = 3
    const pags = Math.ceil(products.length / perPage)
    const handlePrev = () => setStep(step > 0 ? step - 1 : pags - 1)
    const handleNext = () => setStep((step + 1) % pags)

    return (
      <div className='container'>
        {products.slice(step * perPage, (step + 1) * perPage).map(product =>
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

export default Products