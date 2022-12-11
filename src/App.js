import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/NavbarComp';
import Footer from './components/FooterComp';
import Login from './pages/Login';
import Home from './pages/Home';
import AuthService from './services/auth.service';
import Portfolio from './pages/Portfolio';
import Laporan from './pages/Laporan';
import TambahLaporan from './pages/TambahLaporan';
import {firebase} from './firebase'

const navbarContext = React.createContext();


function App() {

  // useEffect(() => {
  //    const msg = firebase.messaging();
  //    msg.requestPermission().then(()=>{
  //     return msg.getToken();

  //    }).then((data) =>{
  //     console.log('token', data);
  //    }).catch(()=>{
  //     console.log('error')
  //    })
  // })
  
  const [navbar, setnavbar] = useState(AuthService.getCurrentUser())

  return (
    <>
      <navbarContext.Provider value={{navbar, setnavbar}}>
        <BrowserRouter>
          <Navbar/>
            <Routes>  
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/laporan' element={<Laporan />} />
              <Route path='/tambah-laporan' element={<TambahLaporan />} />
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
