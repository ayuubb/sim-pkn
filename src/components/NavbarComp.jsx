import React, { useEffect, useState, useContext } from 'react';
import AuthService from '../services/auth.service';
import { navbarContext } from '../App';

export default function NavbarComp() {

    const [currentUser, setCurrentUser] = useState(undefined);
    const [listNavbar, setListNavbar] = useState([]);
    const navbarC = useContext(navbarContext);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            console.log(user);
            setCurrentUser(user);
        } else {
            console.log('tidak ada');
        }

        console.log(navbarC.navbar);
    }, []);

    return (
        <header className="navbar navbar-inverse navbar-fixed-top wet-asphalt" role="banner">
            <div className="container" style={{ padding: '0px 32px' }}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="fa fa-bars"></span>
                    </button>
                    <a className="navbar-brand" href="https://simanta.umm.ac.id/~pkn_prod/">
                        <h2 style={{ marginTop: '10px' }}><i className="fa fa-home"></i> SIM PKN</h2>
                    </a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="https://simanta.umm.ac.id/~pkn_prod/index.php">Home</a></li>
                        <li><a href="https://simanta.umm.ac.id/~pkn_prod/index.php/pengumuman">Pengumuman</a></li>
                        <li><a href="https://simanta.umm.ac.id/~pkn_prod/index.php/panduan">Panduan</a></li>

                        {navbarC.navbar ? '' : (
                            <>
                                <li><a href="https://simanta.umm.ac.id/~pkn_prod/index.php/login" title="Login">Login</a></li>
                                <li><a href="https://simanta.umm.ac.id/~pkn_prod/index.php/registrasi">Sign Up</a></li>
                            </>
                        )}

                    </ul>
                </div>
            </div>

        </header>
    );
}
