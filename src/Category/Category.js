import './Category.css';
import Products from './Products';
import NotFound from '../NotFound';
import Categories from './Categories';


function Category({search}) {
  return (
    <div className="HomePage">
      <aside className='aside'>
        <Categories />
      </aside>
      <main className='main'>
        {search ? <Products key={search} products={search}/> : <NotFound />}
      </main>
    </div>
  );
}

export default Category;