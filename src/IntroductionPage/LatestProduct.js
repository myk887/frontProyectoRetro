import useFetch from 'fetch-suspense'
import { Suspense,  useCallback,  useEffect,  useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import './introductionPage.css';

function LatestProduct () {
    const articles = useFetch('http://localhost:3000/articles')
    const newArticles = [...articles]
    const articlesLowcost = newArticles.sort(function(a, b){return a.createdAt - b.createdAt})
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
            <h1>
                Los productos mas nuevos LatestProduct.js
            </h1>
           <main>
             <div className="photos">
             <span className='previous oferts' onClick={handlePrev}>⇦</span>
               {articlesLowcost?.slice(step * perPage, (step + 1) * perPage).map(product =>
                 <div key={product.id} className="photo">
                   <img src={`http://localhost:3000${product.photo.replace('./', '/')}`} alt="" />
                   <Link to={'/article/' + product.id}><span>{product.name}</span></Link>
                 </div>
               )}
               <span className='next oferts' onClick={handleNext}>⇨</span>
             </div>
           </main>
      </div>
    )
}

const LatestProductWrapper = () =>
  <Suspense fallback={<Loading />}>
    <LatestProduct />
  </Suspense>

export default LatestProductWrapper
