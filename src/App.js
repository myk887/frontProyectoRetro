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
import CreateArticle from './CreateArticle/CreateArticle';
import ModifyArticle from './ModifyArticle/ModifyArticle';
import EditUser from './EditUser/EditUser';
import ContactPage from './ContactPage/ContactPage';


function App() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <header className="header">
      <ErrorBoundary fallback={<Loading/>}>
        <Logo />
        <Routes>
          <Route path='todos' element={<Search setSearch={setSearch}/>} />
          <Route path='article/byCategory/:category' element={<SearchCategory setSearch={setSearch}/>} />
          <Route path='article/bySubCategory/:subcategory' element={<SearchSubCategory setSearch={setSearch}/>}/>
          <Route path='*' element={''}/>
        </Routes>
        <Login />
      </ErrorBoundary>
      </header>
      <ErrorBoundary fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="todos" element={<HomePage search={search} setSearch={setSearch} />} />
          <Route path="article/:id" element={<ArticlesPage />} />
          <Route path="article/byCategory/:category" element={<Category search={search} setSearch={setSearch} />} />
          <Route path="article/bySubCategory/:subcategory" element={<SubCategory search={search} setSearch={setSearch} />} />
          <Route path="user/registre" element={<RegistrePage />} />
          <Route path="user/articles" element={<MyArticles />} />
          <Route path="user/article/create" element={<CreateArticle />} />
          <Route path="user/article/modify/:idActuallyArticle" element={<ModifyArticle />} />
          <Route path="user/edit" element={<EditUser />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
        </ErrorBoundary>
        <footer className='footer'>
          AKA FOOTER
        </footer>
    </div>
  );
}

export default App;