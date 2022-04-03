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
import RegisterPage from './Register/RegisterPage'
import MyArticles from './MyArticles/MyArticles';
import CreateArticle from './CreateArticle/CreateArticle';
import ModifyArticle from './ModifyArticle/ModifyArticle';
import EditUser from './EditUser/EditUser';
import ContactPage from './ContactPage/ContactPage';
import MyActivity from './MyActivity/MyActivity';
import Privacity from './Legal/Privacity'
import LegalNotice from './Legal/LegalNotice'
import ConfirmEmail from "./ConfirmEmail"
import { useState } from "react"


function Main ({search, setSearch}) {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)

    return (
        <div>
            <div className="body-structure">
                <>
                    <ErrorBoundary fallback={<Loading/>}>
                        <Routes>
                            <Route path="/" element={<Aside show={show} setShow={setShow} show2={show2} setShow2={setShow2} show3={show3} setShow3={setShow3} show4={show4} setShow4={setShow4} show5={show5} setShow5={setShow5} show6={show6} setShow6={setShow6} show7={show7} setShow7={setShow7}/>} />
                            <Route path="todos" element={<Aside show={show} setShow={setShow} show2={show2} setShow2={setShow2} show3={show3} setShow3={setShow3} show4={show4} setShow4={setShow4} show5={show5} setShow5={setShow5} show6={show6} setShow6={setShow6} show7={show7} setShow7={setShow7}/>} />
                            {/* <Route path="article/:id" element={<Aside className='asideArticle'/>} /> */}
                            <Route path="article/byCategory/:category" element={<Aside show={show} setShow={setShow} show2={show2} setShow2={setShow2} show3={show3} setShow3={setShow3} show4={show4} setShow4={setShow4} show5={show5} setShow5={setShow5} show6={show6} setShow6={setShow6} show7={show7} setShow7={setShow7}/>} />
                            <Route path="article/bySubCategory/:subcategory" element={<Aside show={show} setShow={setShow} show2={show2} setShow2={setShow2} show3={show3} setShow3={setShow3} show4={show4} setShow4={setShow4} show5={show5} setShow5={setShow5} show6={show6} setShow6={setShow6} show7={show7} setShow7={setShow7}/>} />
                            <Route path="confirmation/:code" element={<Aside show={show} setShow={setShow} show2={show2} setShow2={setShow2} show3={show3} setShow3={setShow3} show4={show4} setShow4={setShow4} show5={show5} setShow5={setShow5} show6={show6} setShow6={setShow6} show7={show7} setShow7={setShow7}/>} />
                            <Route path='*' element={''}/>
                        </Routes>
                    </ErrorBoundary>
                </>
                <>
                    <ErrorBoundary fallback={<Loading/>}>
                        <Routes>
                            <Route path="/" element={<IntroductionPage  setShow={setShow} setShow2={setShow2} setShow3={setShow3} setShow4={setShow4} setShow5={setShow5} setShow6={setShow6} setShow7={setShow7}/>} />
                            <Route path="todos" element={<HomePage search={search} setSearch={setSearch} setShow={setShow} setShow2={setShow2} setShow3={setShow3} setShow4={setShow4} setShow5={setShow5} setShow6={setShow6} setShow7={setShow7}/>} />
                            <Route path="article/:id" element={<ArticlesPage setShow={setShow} setShow2={setShow2} setShow3={setShow3} setShow4={setShow4} setShow5={setShow5} setShow6={setShow6} setShow7={setShow7}/>} />
                            <Route path="article/byCategory/:category" element={<Category search={search} setSearch={setSearch} setShow={setShow} setShow2={setShow2} setShow3={setShow3} setShow4={setShow4} setShow5={setShow5} setShow6={setShow6} setShow7={setShow7}/>} />
                            <Route path="article/bySubCategory/:subcategory" element={<SubCategory search={search} setSearch={setSearch} setShow={setShow} setShow2={setShow2} setShow3={setShow3} setShow4={setShow4} setShow5={setShow5} setShow6={setShow6} setShow7={setShow7}/>} />
                            <Route path="confirmation/:code" element={<ConfirmEmail setShow={setShow} setShow2={setShow2} setShow3={setShow3} setShow4={setShow4} setShow5={setShow5} setShow6={setShow6} setShow7={setShow7}/>} />
                            <Route path='*' element={''}/>
                        </Routes>
                    </ErrorBoundary>
                </>
            </div>
            <div className="registered-user">
                <ErrorBoundary fallback={<Loading/>}>
                    <Routes>
                        <Route path="user/articles" element={<MyArticles />} />
                        <Route path="user/register" element={<RegisterPage />} />
                        <Route path="user/article/create" element={<CreateArticle />} />
                        <Route path="user/article/modify/:idActuallyArticle" element={<ModifyArticle />} />
                        <Route path="user/edit" element={<EditUser />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="user/actividad" element={<MyActivity />} />
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