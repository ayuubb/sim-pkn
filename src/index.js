import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.js'
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/main.css';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import swDev from './swDev';
// import firebase from './config/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
swDev();

// firebase();
