import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss";

const firebaseConfig = {
  apiKey: "AIzaSyC8UW09tqn5m8U8foY5C7a8Q4Af3HTQXD0",
  authDomain: "ac-shop-bb1ff.firebaseapp.com",
  projectId: "ac-shop-bb1ff",
  storageBucket: "ac-shop-bb1ff.appspot.com",
  messagingSenderId: "262989881598",
  appId: "1:262989881598:web:78a72c20e9b73e19bd85af"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);