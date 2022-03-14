import { Route, Routes } from "react-router-dom"
import ErrorBoundary from "./ErrorBoundary"
import Loading from "./Loading"
import logo from './images/logos/LogoRetroText.png'
import Login from "./Login"
import Search from "./Search"
import SearchCategory from "./SearchCategory"
import SearchSubCategory from "./SearchSubCategory"
import './Header.css'

function Header ({setSearch}) {

    return (
      <header className="header">
        <ErrorBoundary fallback={<Loading/>}>
          <div className="header-logo">
            <img className="header-logo-image" src={logo} alt="logoImage"/>
          </div>

          <div className="header-search">
            <Routes className="header-search">
              <Route path='/' element={<Search setSearch={setSearch}/>} />
              <Route path='todos' element={<Search setSearch={setSearch}/>} />
              <Route path='article/byCategory/:category' element={<SearchCategory setSearch={setSearch}/>} />
              <Route path='article/bySubCategory/:subcategory' element={<SearchSubCategory setSearch={setSearch}/>}/>
              <Route path='*' element={''}/>
            </Routes>
          </div>

          <div className="header-login">
            <Login />
          </div>

        </ErrorBoundary>
      </header>
    )
  }
  export default Header