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
import MyActivity from './MyActivity/MyActivity';
import PageBuy from './PageBuy/PageBuy';
import Privacity from './Legal/Privacity';
import LegalNotice from './Legal/LegalNotice';
import Footer from './Footer';
import Categories from './Aside/Categories';


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
      <div className='main1'>
      <ErrorBoundary fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="todos" element={<Categories />} />
            <Route path="article/:id" element={<Categories className='asideArticle'/>} />
            <Route path="article/byCategory/:category" element={<Categories />} />
            <Route path="article/bySubCategory/:subcategory" element={<Categories />} />
            <Route path="user/registre" element={<Categories />} />
          </Routes>
        </ErrorBoundary>
        <ErrorBoundary fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<IntroductionPage />} />
            <Route path="todos" element={<HomePage search={search} setSearch={setSearch} />} />
            <Route path="article/:id" element={<ArticlesPage />} />
            <Route path="article/byCategory/:category" element={<Category search={search} setSearch={setSearch} />} />
            <Route path="article/bySubCategory/:subcategory" element={<SubCategory search={search} setSearch={setSearch} />} />
            <Route path="user/registre" element={<RegistrePage />} />
          </Routes>
          </ErrorBoundary>
        </div>
        <ErrorBoundary fallback={<Loading/>}>
          <Routes>
            <Route path="user/articles" element={<MyArticles />} />
            <Route path="user/article/create" element={<CreateArticle />} />
            <Route path="user/article/modify/:idActuallyArticle" element={<ModifyArticle />} />
            <Route path="user/edit" element={<EditUser />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="user/actividad" element={<MyActivity />} />
            <Route path="user/Comercio" element={<PageBuy />} />
            <Route path="privacity" element={<Privacity />} />
            <Route path="legal-notice" element={<LegalNotice />} />
          </Routes>
          </ErrorBoundary>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;