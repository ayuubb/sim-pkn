import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { navbarContext } from '../App';
import SectionTitle from '../components/SectionTitle';
import AuthService from '../services/auth.service';
// import db from "../config/firebase";

export default function Login() {
    const navigate = useNavigate();
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');
    const navbarC = useContext(navbarContext);

    const handleLogin = async () => {
        try {
            await AuthService.login(nim, password).then(
                (res) => {
                    console.log(res);
                    navbarC.setnavbar(res);
                    navigate('/portfolio');
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(navbarC.navbar);
    }, []);

    return (
        <>
            <SectionTitle title={'Login'} />
            <section
                id="registration"
                className="container"
                style={{ marginBottom: '18px' }}
            >
                <div className="center">
                    <input
                        type="hidden"
                        name="token"
                        value="4266943e414b46cc6212488558922c1becb7bf28"
                    />
                    <input type="hidden" name="request_form" value="login" />
                    <fieldset className="registration-form">
                        <div className="form-group">
                            <h3>Form Login</h3>
                            <hr />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="NIM"
                                className="form-control"
                                required=""
                                onChange={(e) => setNim(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                required=""
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                onClick={() => handleLogin()}
                                className="btn btn-success btn-md btn-block"
                            >
                                Login
                            </button>
                        </div>
                    </fieldset>
                </div>
            </section>
        </>
    );
}
