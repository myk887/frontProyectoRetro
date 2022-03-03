import { Route, Routes } from "react-router-dom"
import Aside from "./Aside/Aside"
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
import ConfirmEmail from "./ConfirmEmail"


function Main ({search, setSearch}) {

    return (
        <div>
            <div className="body-structure">
                <>
                    <ErrorBoundary fallback={<Loading/>}>
                        <Routes>
                            <Route path="/" element={<Aside />} />
                            <Route path="todos" element={<Aside />} />
                            <Route path="article/:id" element={<Aside className='asideArticle'/>} />
                            <Route path="article/byCategory/:category" element={<Aside />} />
                            <Route path="article/bySubCategory/:subcategory" element={<Aside />} />
                            <Route path="confirmation/:code" element={<Aside />} />
                            <Route path='*' element={''}/>
                        </Routes>
                    </ErrorBoundary>
                </>
                <>
                    <ErrorBoundary fallback={<Loading/>}>
                        <Routes>
                            <Route path="/" element={<IntroductionPage />} />
                            <Route path="todos" element={<HomePage search={search} setSearch={setSearch} />} />
                            <Route path="article/:id" element={<ArticlesPage />} />
                            <Route path="article/byCategory/:category" element={<Category search={search} setSearch={setSearch} />} />
                            <Route path="article/bySubCategory/:subcategory" element={<SubCategory search={search} setSearch={setSearch} />} />
                            <Route path="confirmation/:code" element={<ConfirmEmail />} />
                            <Route path='*' element={''}/>
                        </Routes>
                    </ErrorBoundary>
                </>
            </div>
            <div className="registered-user main2">
                <ErrorBoundary fallback={<Loading/>}>
                    <Routes>
                        <Route path="user/articles" element={<MyArticles />} />
                        <Route path="user/registre" element={<RegistrePage />} />
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
            </div>
        </div>
    )
  }
  export default Main