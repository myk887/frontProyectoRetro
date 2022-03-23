import useFetch from 'fetch-suspense'
import { Suspense,  useCallback,  useEffect,  useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import './introductionPage.css';

function BestPrices () {

    const articles = useFetch('http://localhost:3000/articles')
    const newArticles = [...articles]
    const articlesLowcost = newArticles.sort(function(a, b){return a.price - b.price})
    const [step, setStep] = useState(0)
    const perPage = 3
    const pags = Math.ceil(articlesLowcost.length / perPage)

    const handlePrev = () => setStep(step > 0 ? step - 1 : pags - 1)
    const handleNext = useCallback(() => setStep((step + 1) % pags), [setStep, step, pags])

    //useCallback
    //useMemo

    useEffect(() => {
      const carousel = setInterval(() => {
        handleNext();
      }, 3000);

      return () => {
        clearInterval(carousel)
      }
    }, [handleNext])

    return (
        <div>
          <h1 className="introductionpage-title">PRECIOS PARA TODOS LOS BOLSILLOS</h1>
            <main>

             <div className="introductionpage-banner">

             <span className='introductionpage-arrows' onClick={handlePrev}>❮</span>

               {articlesLowcost?.slice(step * perPage, (step + 1) * perPage).map(product =>

                <div key={product.id}>

                    <div className="introductionpage-container">

                      <Link to={'/article/' + product.id}>

                        <div className="introductionpage-photos" style={{backgroundImage: `url(${`http://localhost:3000${product.photo.replace('./', '/')}`})`}}></div>

                        <div className="introductionpage-productinfo">

                          <span className="introductionpage-names" >{product.name}</span>

                          <span className="introductionpage-prices" >{product.price + ' €'}</span>

                        </div>

                      </Link>

                    </div>

                </div>
              )}

              <span className='introductionpage-arrows' onClick={handleNext}>❯</span>

            </div>
         </main>
      </div>
  )
}

const BestPricesWrapper = () =>
  <Suspense fallback={<Loading />}>
    <BestPrices />
  </Suspense>

export default BestPricesWrapper
