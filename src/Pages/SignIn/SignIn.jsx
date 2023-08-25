import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './signIn.css';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import { login } from '../../Utility/Utility';

function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function go(e){
        e.preventDefault();
        console.log(username);
    } 

  return (
    <div>
        <body>
        <Header/>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                < h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" onClick={(e) => go(e)}>Sign In</button>
                </form>
            </section>
            
        </main>
        <Footer/>
        </body>
    </div>
)}

export default SignIn