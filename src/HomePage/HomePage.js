import './HomePage.css';
import Products from './Products';
import NotFound from '../NotFound';
import Categories from './Categories';


function HomePage({search, user, setUser, setSearch}) {
  return (
    <div className="HomePage">
      <aside className='aside'>
        <Categories />
      </aside>
      <main className='main'>
        {search ? <Products products={search}/> : <NotFound />}
      </main>
    </div>
  );
}

export default HomePage;