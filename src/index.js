import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: "AIzaSyA_slFq-vM_kPR3akKoqMMOiK35RVGBUpE",
  authDomain: "ejiro-s-take-on-netflix.firebaseapp.com",
  databaseURL: 'https://ejiro-s-take-on-netflix.firebaseio.com',
  projectId: "ejiro-s-take-on-netflix",
  storageBucket: "ejiro-s-take-on-netflix.appspot.com",
  messagingSenderId: "727726707893",
  appId: "1:727726707893:web:944b1e16c9671da3865afc"
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
