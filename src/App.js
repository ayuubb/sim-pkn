import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/NavbarComp';
import Footer from './components/FooterComp';
import Login from './pages/Login';
import Home from './pages/Home';
import AuthService from './services/auth.service';

const navbarContext = React.createContext();

function App() {

  const [navbar, setnavbar] = useState(AuthService.getCurrentUser())

  return (
    <>
      <navbarContext.Provider value={{navbar, setnavbar}}>
        <BrowserRouter>
          <Navbar/>
            <Routes>  
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </navbarContext.Provider>
    </>
  );
}

export default App;
export { navbarContext };
