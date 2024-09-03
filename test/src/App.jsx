import React from 'react';
 import { Routes, Route } from 'react-router-dom';
 import Layout from './components/Pages/Layout';
 import Home from './components/Pages/Home';
 import About from './components/Pages/About';
 import Catalog from './components/Pages/Catalogue';
 import Account from './components/Pages/Account';
 import Vendor from './components/Pages/Vendor';
 import Blog from './components/Pages/Blog';
 import "./App.css"
 
 function App() {
   
  
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
         {/*  <Route index element={<Home />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="account" element={<Account />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    );
  }
  
  export default App;