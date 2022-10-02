import React from 'react';

export default function NavbarComp() {
    return (
    <header className="navbar navbar-inverse navbar-fixed-top wet-asphalt" role="banner">
            <div className="container" style={{padding: '0px 32px'}}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="fa fa-bars"></span>
                    </button>
                    <a className="navbar-brand" href="https://simanta.umm.ac.id/~pkn_prod/">
                        <h2 style={{marginTop:'10px'}}><i className="fa fa-home"></i> SIM PKN</h2>
                    </a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="https://simanta.umm.ac.id/~pkn_prod/index.php">Home</a></li>
                        <li><a href="https://simanta.umm.ac.id/~pkn_prod/index.php/pengumuman">Pengumuman</a></li>
                        <li><a href="https://simanta.umm.ac.id/~pkn_prod/index.php/panduan">Panduan</a></li>           
                        
                <li>
                <a href="https://simanta.umm.ac.id/~pkn_prod/index.php/login" title="Login">Login</a>
            </li>
            <li><a href="https://simanta.umm.ac.id/~pkn_prod/index.php/registrasi">Sign Up</a></li>
        
                    </ul>
                </div>
            </div>
    
    </header>
    );
}
