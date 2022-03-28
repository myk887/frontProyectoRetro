import Products from './Products';
import NotFound from '../NotFound';
import SubCategories from './SubCategories';


function SubCategory({search}) {
  return (
    <div className="HomePage">
      <main className='main'>
        <div className='subCategories'>
            <SubCategories />
        </div>
        {search ? <Products key={search + Math.random()} products={search}/> : <NotFound />}
      </main>
    </div>
  );
}

export default SubCategory;