import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {

  // * ================================ Configuring Local State Variables ================================
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  // * ================================ Helper Functions ================================

  const handleFormSubmission = (e)=> {

    e.preventDefault();

    console.log(userName);
    console.log(email);
    console.log(phone);
    console.log(password);

  }

  require('dotenv').config();




  // * ================================================ Returning Page ================================================
  return (

    <div>

      <p>{process.env.apiKey}</p>

      <div className="signupParentDiv">

        <img width="200px" height="200px" src={Logo}></img>

        <form onSubmit={handleFormSubmission}>

          <label htmlFor="fname">Username</label>

          <br />

          <input className="input" type="text" id="fname" name="name" placeholder = "Enter username" defaultValue="John" value={userName} onChange={(e)=>setUserName(e.target.value)} />

          <br />

          <label htmlFor="fname">Email</label>

          <br />

          <input className="input" type="email" id="fname" name="email" placeholder = "Enter email" defaultValue="John" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <br />

          <label htmlFor="lname">Phone</label>

          <br />

          <input className="input" type="number" id="lname" name="phone" placeholder = "Enter phone" defaultValue="Doe" value={phone} onChange={(e)=>setPhone(e.target.value)} />

          <br />

          <label htmlFor="lname">Password</label>

          <br />

          <input className="input" type="password" id="lname" name="password" placeholder = "Enter password" defaultValue="Doe" value={password} onChange={(e)=>setPassword(e.target.value)} />

          <br />
          <br />

          <button>Signup</button>

        </form>

        <a>Login</a>

      </div>

    </div>

  );

}
