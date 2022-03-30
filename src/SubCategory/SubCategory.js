import Products from './Products';
import NotFound from '../NotFound';
import SubCategories from './SubCategories';


function SubCategory({search, setShow, setShow2, setShow3, setShow4, setShow5, setShow6, setShow7}) {
  return (
    <div className="HomePage" onMouseOver={()=>{
      setShow(false)
      setShow2(false)
      setShow3(false)
      setShow4(false)
      setShow5(false)
      setShow6(false)
      setShow7(false)
    }}>
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