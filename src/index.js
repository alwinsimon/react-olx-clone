import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { FirebaseContext } from '../src/store/FirebaseContext';
import firebase from './firebase/firebaseConfig';

ReactDOM.render(
    
    <FirebaseContext.Provider value={{firebase}}>
        <App />
    </FirebaseContext.Provider>

, document.getElementById('root'));
