import React from 'react';
import { Link } from 'react-router-dom'

export default function NavbarComp() {
    return (
        <header
            className="navbar navbar-inverse navbar-fixed-top wet-asphalt"
            role="banner"
        >
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
