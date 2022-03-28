import Products from './Products';
import NotFound from '../NotFound';

function HomePage({search}) {
  return (
    <div className="homePage">
      <main className='homepage-main'>
        {search ? <Products products={search}/> : <NotFound />}
      </main>
    </div>
  );
}

export default HomePage;