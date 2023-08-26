import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios';
import './login.css';
import { useDispatch } from 'react-redux';
import { login } from '../../Utility/userSlice';
import { useNavigate } from "react-router-dom";


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let token = '';

        //GET TOKEN
        await axios.post('http://localhost:3001/api/v1/user/login', {
        email: username,
        password: password
        })
        .then(function (response) {
            token = response.data.body.token;
        })
        .catch(function (error) {
        });

    
        //GET PROFILE INFO
        await axios.post('http://localhost:3001/api/v1/user/profile',null, 
        {
            headers: {Authorization: `Bearer` + token} 
        })
        .then(function (response) {
        let userResponse = response.data.body;
        dispatch(
            login({
                token : token,
                id: userResponse.id,
                firstName : userResponse.firstName,
                lastName : userResponse.lastName
            })
        )
        navigate("/profile");
        })
      .catch(function (error) {
      });
    }
        
return (
    <div>
        <body>
        <Header/>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                < h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
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
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
            
        </main>
        <Footer/>
        </body>
    </div>
)}

export default Login