import './introductionPage.css';
import Banners from './Banners';
import LatestProductWrapper from './LatestProduct';
import ProductsLowcostWrapper from './ProductsLowcost';

function IntroductionPage () {

    return (
      <div className='introductioPage'>
        <div className='ofertas'>
          <Banners/>
          <ProductsLowcostWrapper />
          <LatestProductWrapper />
        </div>
      </div>
    )
}


export default IntroductionPage
