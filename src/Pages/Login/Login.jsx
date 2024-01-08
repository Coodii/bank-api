import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, login, selectUser } from '../../Utility/userSlice';
import { useNavigate } from "react-router-dom";



function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {tokenReceived, token, connected, error} = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch(getToken({email : username, password: password}))
    }


    //When token is received, start login
    useEffect(() => {
        if (tokenReceived) {
          dispatch(login(token))
        }
      }, [dispatch, token, tokenReceived])


    //When connexion is etablished, navigate to the profile
    useEffect(() => {
        if (connected) {
            navigate('/profile')
        }
    }, [connected, navigate])
    
        
    return (
        <div className='login'>
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
                        {error ? (<div>Connexion invalide</div>) : null}
                    </form>
                </section>
                
            </main>
            <Footer/>
        </div>
    )}

export default Login