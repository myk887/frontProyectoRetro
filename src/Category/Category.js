import Products from './Products';
import NotFound from '../NotFound';
import SubCategories from './SubCategories';


function Category({search}) {
  return (
    <div className="category">
      <main className='category-main'>
        <div className='subcategories'>
          <SubCategories />
        </div>
        {search.length ? <Products key={search} products={search}/> : <NotFound />}
      </main>
    </div>
  );
}

export default Category;