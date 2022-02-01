import AsideRegistre from './AsideRegistre';
import Registre from './Registre';
import './ResgistrePage.css'


function Category({user, setUser}) {
  return (
    <div className="RegistrePage">
      <aside className='asideRegistre'>
        <AsideRegistre />
      </aside>
      <main className='mainRegistre'>
        <Registre/>
      </main>
    </div>
  );
}

export default Category;