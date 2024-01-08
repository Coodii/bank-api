import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, login, selectUser } from '../../Utility/userSlice';
import { useNavigate } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Login() {

    const [username, setUsername] = useState(localStorage?.getItem("email"));
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const {tokenReceived, token, connected, loading, error, errorMessage} = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch(getToken({email : username, password: password}))
        if(rememberMe){
            localStorage.setItem("email", username);
        }
        else{
            localStorage.removeItem("email");
        }
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
        <div className='current_page'>
            <Header/>
            <main className="main bg-dark">
                <section className="sign-in-content">
                <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
                    < h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} required value={username}/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" onChange={(e) => setRememberMe(!rememberMe)} />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                        {loading ? <p className='loading'>Loading...</p> : null}
                        {error ? <p className='error'>{errorMessage}</p> : null}
                    </form>
                </section>
                
            </main>
            <Footer/>
        </div>
    )}

export default Login