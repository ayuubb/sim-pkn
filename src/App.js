import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavbarComp';
import Footer from './components/FooterComp';
import Login from './pages/Login';
import Home from './pages/Home';
import AuthService from './services/auth.service';
import Portfolio from './pages/Portfolio';
import Laporan from './pages/Laporan';
import TambahLaporan from './pages/TambahLaporan';
import { messaging } from './firebase';
import { getToken, onMessage } from 'firebase/messaging';

const navbarContext = React.createContext();

function App() {
    async function requestPermission() {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            // Generate Token
            const token = await getToken(messaging, {
                vapidKey:
                    'BCI0raiLrfvRGZUkWU0rSz3eSzQL52AZiQ8C14achBYHtTWvcuHkSoVB9CjcWGv0BjfHnLPp69Y8Hl7hU8skEbg',
            });
            console.log('Token Gen', token);
            console.log(messaging);
            alert(token);
            // Send this token  to server ( db)
        } else if (permission === 'denied') {
            alert('You denied for the notification');
        }

        messaging.onBackgroundMessageHandler((payload) => {
            console.log(
                '[firebase-messaging-sw.js] Received background message ',
                payload
            );
            const notificationTitle = payload.notification.title;
            const notificationOptions = {
                body: payload.notification.body,
                icon: payload.notification.image,
            };

            this.registration.showNotification(
                notificationTitle,
                notificationOptions
            );
        });
    }

    // const activarMensajes = async ()=> {
    //     const token = await getToken(messaging,{
    //         vapidKey: "BCI0raiLrfvRGZUkWU0rSz3eSzQL52AZiQ8C14achBYHtTWvcuHkSoVB9CjcWGv0BjfHnLPp69Y8Hl7hU8skEbg"
    //     }).catch(error => console.log("Tuviste un error al generar el token, papá"));
    //
    //
    //     if(token) console.log("tu token:",token);
    //     if(!token) console.log("no tienes token, rey");
    // }

    useEffect(() => {
        requestPermission();
        onMessage(messaging, (message) => {
            console.log('tes :', message);
        });
    });

    const [navbar, setnavbar] = useState(AuthService.getCurrentUser());

    return (
        <>
            <navbarContext.Provider value={{ navbar, setnavbar }}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/laporan" element={<Laporan />} />
                        <Route
                            path="/tambah-laporan"
                            element={<TambahLaporan />}
                        />
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
