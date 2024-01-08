import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../Img/argentBankLogo.png'
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../Utility/userSlice';

function Header() {
  const {connected}= useSelector(selectUser);
  const dispatch = useDispatch();

  function signOut(){
    dispatch(
      logout()
    )
  }

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
      {!connected ? <NavLink to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink> : <NavLink to="/login" className="main-nav-item" onClick={signOut}>
          <i className="fa fa-user-circle"></i>
          Logout
        </NavLink>}
      </div>
    </nav>
  )
}

export default Header