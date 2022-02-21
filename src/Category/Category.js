import './Category.css';
import Products from './Products';
import NotFound from '../NotFound';
import SubCategories from './SubCategories';


function Category({search}) {
  return (
    <div className="HomePage">
      <main className='main'>
        <div className='subCategories'>
          <SubCategories />
        </div>
        {search.length ? <Products key={search} products={search}/> : <NotFound />}
      </main>
    </div>
  );
}

export default Category;