import './introductionPage.css';
import Banners from './Banners';
import NewProductsWrapper from './NewProducts';
import BestPricesWrapper from './BestPrices';

function IntroductionPage () {

    return (
      <div className='introductioPage'>
        <div className='ofertas'>
          <Banners/>
          <NewProductsWrapper />
          <BestPricesWrapper />
        </div>
      </div>
    )
}

export default IntroductionPage
