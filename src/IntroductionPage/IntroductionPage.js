import useFetch from 'fetch-suspense'
import { Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

function IntroductionPage () {
    const articles = useFetch('http://localhost:3000/articles')
    const newArticles = [...articles]
    const articlesLowcost = newArticles.sort(function(a, b){return a.price - b.price})
    console.log(articlesLowcost)
    console.log(newArticles)
    console.log(articles)
    const [step, setStep] = useState(0)
    const perPage = 3
    const pags = Math.ceil(articlesLowcost.length / perPage)
    useEffect(() => {
        const id = setInterval(() => setStep(step > 0 ? step - 1 : pags - 1), 3000)
        return clearInterval(id)
    }, [pags, step])

    return (
      <div className='container'>
        {articlesLowcost?.slice(step * perPage, (step + 1) * perPage).map(product =>
        <div key={product.id} className='product'>
            <img src={`http://localhost:3000${product.photo.replace('./', '/')}`} alt={product.name} className='photo'/>
            <div className='content'>
                <h1>{product.name}</h1>
                <div className='description'>
                    <p>{product.description}</p>
                    <div className='spanButton'>
                        <span> Precio: {product.price}€</span>
                        <button type='button' className='irCompra'><Link to={'/article/' +product.id} className='enlace'>ver producto</Link></button>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
    )
}

const IntroductionPageWrapper = () =>
  <Suspense fallback={<Loading />}>
    <IntroductionPage />
  </Suspense>

export default IntroductionPageWrapper
