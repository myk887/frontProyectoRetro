import Categories from './Categories';
import './introductionPage.css';
import LatestProductWrapper from './LatestProduct';
import ProductsLowcostWrapper from './ProductsLowcost';

function IntroductionPage () {

    return (
      <div className='introductioPage'>
        <aside className='home'>
          <Categories />
        </aside>
        <div className='ofertas'>
          <ProductsLowcostWrapper />
          <LatestProductWrapper />
        </div>
      </div>
    )
}


export default IntroductionPage
