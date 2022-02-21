import './HomePage.css';
import Products from './Products';
import NotFound from '../NotFound';


function HomePage({search}) {
  return (
    <div className="HomePage">
      <main className='main'>
        {search ? <Products products={search}/> : <NotFound />}
      </main>
    </div>
  );
}

export default HomePage;