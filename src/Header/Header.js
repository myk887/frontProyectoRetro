import { Routes, Route} from "react-router-dom";
import ErrorBoundary from '../ErrorBoundary';
import Logo from "../Logo";
import Login from "../Login"
import Loading from "../Loading";
import Search from "../Search";
import SearchCategory from "../SearchCategory";
import SearchSubCategory from "../SearchSubCategory"


function Header( {setSearch}) {

  return (

  <header className="header">
    <ErrorBoundary fallback={<Loading/>}>
      <Logo />
      <Routes>
        <Route path='/' element={<Search setSearch={setSearch}/>} />
        <Route path='todos' element={<Search setSearch={setSearch}/>} />
        <Route path='article/byCategory/:category' element={<SearchCategory setSearch={setSearch}/>} />
        <Route path='article/bySubCategory/:subcategory' element={<SearchSubCategory setSearch={setSearch}/>}/>
        <Route path='*' element={''}/>
      </Routes>
      <Login />
    </ErrorBoundary>
  </header>
  )
}

export default Header