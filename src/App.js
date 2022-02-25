import './App.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <Header setSearch={setSearch}/>
      <Main search={search} setSearch={setSearch}/>
      <Footer />
    </div>
  );
}

export default App;