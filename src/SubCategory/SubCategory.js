import './SubCategory.css';
import Products from './Products';
import NotFound from '../NotFound';
import Categories from './Categories';
import SubCategories from './SubCategories';


function SubCategory({search}) {
  return (
    <div className="HomePage">
      <aside className='aside'>
        <Categories />
      </aside>
      <main className='main'>
        <div className='subCategories'>
            <SubCategories />
        </div>
        {search ? <Products key={search} products={search}/> : <NotFound />}
      </main>
    </div>
  );
}

export default SubCategory;