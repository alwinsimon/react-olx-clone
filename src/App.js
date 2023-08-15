import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import { AuthContext, FirebaseContext } from './store/Context';

// ?  =====Import Components=====
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';




function App() {

  const {user, setUser} = useContext(AuthContext);

  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {

      if(user){
        
        setUser(user);
      
      }

    });

  }, []);
  
  return (
  
    <div>

      <Router>
        
        <Route exact path="/" >
          <Home />
        </Route>

        <Route path="/signup" >
          <Signup />
        </Route>

        <Route path="/login" >
          <Login/>
        </Route>

      </Router>

    </div>
  
  );
  
}

export default App;
