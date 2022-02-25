import { Route, Routes } from "react-router-dom"
import Categories from "./Aside/Categories"
import Category from "./Category/Category"
import ErrorBoundary from "./ErrorBoundary"
import HomePage from "./HomePage/HomePage"
import IntroductionPage from "./IntroductionPage/IntroductionPage"
import Loading from "./Loading"
import SubCategory from "./SubCategory/SubCategory"
import './App.css';
import ArticlesPage from './ArticlesPage/ArticlesPage'
import RegistrePage from './Registre/RegistrePage'
import MyArticles from './MyArticles/MyArticles';
import CreateArticle from './CreateArticle/CreateArticle';
import ModifyArticle from './ModifyArticle/ModifyArticle';
import EditUser from './EditUser/EditUser';
import ContactPage from './ContactPage/ContactPage';
import MyActivity from './MyActivity/MyActivity';
import PageBuy from './PageBuy/PageBuy';
import Privacity from './Legal/Privacity'
import LegalNotice from './Legal/LegalNotice'


function Main ({search, setSearch}) {

    return (
        <>
            <div className='main1'>
            <ErrorBoundary fallback={<Loading/>}>
                <Routes>
                <Route path="/" element={<Categories />} />
                <Route path="todos" element={<Categories />} />
                <Route path="article/:id" element={<Categories className='asideArticle'/>} />
                <Route path="article/byCategory/:category" element={<Categories />} />
                <Route path="article/bySubCategory/:subcategory" element={<Categories />} />
                <Route path="user/registre" element={<Categories />} />
                <Route path='*' element={''}/>
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
                <Route path='*' element={''}/>
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
                <Route path='*' element={''}/>
                </Routes>
                </ErrorBoundary>
            </>
    )
  }
  export default Main