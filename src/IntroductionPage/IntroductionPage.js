import './introductionPage.css';
import Banners from './Banners';
import NewProductsWrapper from './NewProducts';
import BestPricesWrapper from './BestPrices';

function IntroductionPage () {

    return (
        <div className='introductionpage-carousel'>
          <Banners/>
          <NewProductsWrapper />
          <BestPricesWrapper />
        </div>
    )
}

export default IntroductionPage
