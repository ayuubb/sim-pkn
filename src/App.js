import React from 'react';
import {BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/NavbarComp';
import Footer from './components/FooterComp';
import Login from './pages/Login';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Laporan from './pages/Laporan';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>  
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/laporan' element={<Laporan />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
