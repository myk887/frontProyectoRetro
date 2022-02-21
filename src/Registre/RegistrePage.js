import Registre from './Registre';
import './ResgistrePage.css'


function Category({user, setUser}) {
  return (
    <div className="RegistrePage">
      <main className='mainRegistre'>
        <Registre/>
      </main>
    </div>
  );
}

export default Category;