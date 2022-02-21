import './introductionPage.css';
import LatestProductWrapper from './LatestProduct';
import ProductsLowcostWrapper from './ProductsLowcost';

function IntroductionPage () {

    return (
      <div className='introductioPage'>
        <div className='ofertas'>
          <ProductsLowcostWrapper />
          <LatestProductWrapper />
        </div>
      </div>
    )
}


export default IntroductionPage
