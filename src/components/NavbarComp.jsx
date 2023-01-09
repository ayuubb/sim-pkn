import React, { useEffect, useState, useContext } from 'react';
import AuthService from '../services/auth.service';
import { navbarContext } from '../App';
import { Link } from 'react-router-dom'


export default function NavbarComp() {

    const [currentUser, setCurrentUser] = useState(undefined);
    const [login , setLogin] = useState(false)
    const [listNavbar, setListNavbar] = useState([]);
    const navbarC = useContext(navbarContext);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            // console.log(user);
            setCurrentUser(user);
            setLogin(true)
        } else {
            // console.log('tidak ada');
        }

        // console.log(navbarC.navbar);
    }, []);

    if (login){
        return (
            <header className="navbar navbar-inverse navbar-fixed-top wet-asphalt" role="banner">
                <div className="container" style={{ padding: '0px 32px' }}>
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="fa fa-bars"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <h2 style={{ marginTop: '10px' }}>
                                <i className="fa fa-home"></i> SIM PKN
                            </h2>
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {/* <li>
                            <a href='/pengumuman'>
                                Pengumuman
                            </a>
                        </li> */}
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/laporan">Laporan</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }else{
        return (
            <header className="navbar navbar-inverse navbar-fixed-top wet-asphalt" role="banner">
                <div className="container" style={{ padding: '0px 32px' }}>
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="fa fa-bars"></span>
                        </button>
                        <a
                            className="navbar-brand"
                            href="https://simanta.umm.ac.id/~pkn_prod/"
                        >
                            <h2 style={{ marginTop: '10px' }}>
                                <i className="fa fa-home"></i> SIM PKN
                            </h2>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {/* <li>
                            <a href='/pengumuman'>
                                Pengumuman
                            </a>
                        </li> */}
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/laporan">Laporan</Link>
                            </li>

                            <li>
                                <Link
                                    to="/login"
                                    title="Login"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }

}
