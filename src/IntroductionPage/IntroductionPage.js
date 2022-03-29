import './introductionPage.css';
import Banners from './Banners';
import NewProductsWrapper from './NewProducts';
import BestPricesWrapper from './BestPrices';

function IntroductionPage ({setShow, setShow2, setShow3, setShow4, setShow5, setShow6, setShow7}) {

    return (
        <div className='introductionpage-carousel' onMouseOver={()=>{
          setShow(false)
          setShow2(false)
          setShow3(false)
          setShow4(false)
          setShow5(false)
          setShow6(false)
          setShow7(false)
        }}>
          <Banners/>
          <NewProductsWrapper />
          <BestPricesWrapper />
        </div>
    )
}

export default IntroductionPage
