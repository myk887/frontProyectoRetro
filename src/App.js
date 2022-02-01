import './App.css';
import { Routes, Route} from "react-router-dom";
import { useState } from 'react';
import HomePage from './HomePage/HomePage';
import ArticlesPage from './ArticlesPage/ArticlesPage';
import Category from './Category/Category'
import RegistrePage from './Registre/RegistrePage';
import Login from './Login';
import Logo from './Logo';
import Search from './Search';
import SearchCategory from './SearchCategory';


function App() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <header className="header">
      <Logo />
      <Routes>
        <Route path='/' element={<Search setSearch={setSearch}/>} />
        <Route path='article/byCategory/:category' element={<SearchCategory setSearch={setSearch}/>} />
        <Route path='*' element={''}/>
      </Routes>
      <Login />
    </header>
      <Routes>
        <Route path="/" element={<HomePage search={search} setSearch={setSearch} />} />
        <Route path="article/:id" element={<ArticlesPage />} />
        <Route path="article/byCategory/:category" element={<Category search={search} setSearch={setSearch} />} />
        <Route path="user/registre" element={<RegistrePage />} />
      </Routes>
      <footer className='footer'>
        AKA FOOTER
      </footer>
    </div>
  );
}

export default App;