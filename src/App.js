import './App.css';
import { Routes, Route} from "react-router-dom";
import { useState } from 'react';
import HomePage from './HomePage/HomePage';
import ArticlesPage from './ArticlesPage/ArticlesPage';
import Category from './Category/Category'
import SubCategory from './SubCategory/SubCategory'
import RegistrePage from './Registre/RegistrePage';
import Login from './Login';
import Logo from './Logo';
import Search from './Search';
import SearchCategory from './SearchCategory';
import SearchSubCategory from './SearchSubCategory';
import ErrorBoundary from './ErrorBoundary';
import Loading from './Loading';
import IntroductionPage from './IntroductionPage/IntroductionPage';
import MyArticles from './MyArticles/MyArticles';


function App() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <header className="header">
      <ErrorBoundary fallback={<Loading/>}>
        <Logo />
        <Routes>
          <Route path='/' element={<Search setSearch={setSearch}/>} />
          <Route path='article/byCategory/:category' element={<SearchCategory setSearch={setSearch}/>} />
          <Route path='article/bySubCategory/:subcategory' element={<SearchSubCategory setSearch={setSearch}/>}/>
          <Route path='*' element={''}/>
        </Routes>
        <Login />
      </ErrorBoundary>
      </header>
      <ErrorBoundary fallback={<Loading/>}>
        <Routes>
          <Route path="Inicio" element={<IntroductionPage />} />
          <Route path="/" element={<HomePage search={search} setSearch={setSearch} />} />
          <Route path="article/:id" element={<ArticlesPage />} />
          <Route path="article/byCategory/:category" element={<Category search={search} setSearch={setSearch} />} />
          <Route path="article/bySubCategory/:subcategory" element={<SubCategory search={search} setSearch={setSearch} />} />
          <Route path="user/registre" element={<RegistrePage />} />
          <Route path="user/articles" element={<MyArticles />} />
        </Routes>
        </ErrorBoundary>
        <footer className='footer'>
          AKA FOOTER
        </footer>
    </div>
  );
}

export default App;