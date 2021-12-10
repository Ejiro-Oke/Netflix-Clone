import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: "AIzaSyANTKPLktz_gDZu-Hmw-ctYUj6vUdMVrkM",
  authDomain: "react-nflix.firebaseapp.com",
  projectId: "react-nflix",
  storageBucket: "react-nflix.appspot.com",
  messagingSenderId: "165222968109",
  appId: "1:165222968109:web:dd7c87099be266013f01a4"
};


window.firebase.initializeApp(config);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);