import { Route, Routes } from "react-router-dom"
import ErrorBoundary from "./ErrorBoundary"
import Loading from "./Loading"
import logo from './images/LogoRetroTRANS.png'
import Login from "./Login"
import Search from "./Search"
import SearchCategory from "./SearchCategory"
import SearchSubCategory from "./SearchSubCategory"
import './Header.css'

function Header ({setSearch}) {

    return (
        <header className="header">
        <ErrorBoundary fallback={<Loading/>}>
        <img src={logo} alt="logoImage" className="logo"/>
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