import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../Img/argentBankLogo.png'
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../Utility/userSlice';
import { faUserCircle,faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  const {connected, firstName}= useSelector(selectUser);
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
      <FontAwesomeIcon className='nav_logo' icon={faUserCircle} />
          Sign In
        </NavLink> :
        <div className='connected'>
          <NavLink to="/profile" className="main-nav-item connected"> 
            <FontAwesomeIcon className='nav_logo' icon={faUserCircle} />
            {firstName}
          </NavLink>
          <NavLink to="/login" className="main-nav-item" onClick={signOut}>
            <FontAwesomeIcon className='nav_logo' icon={faRightFromBracket} />
            Logout
          </NavLink>
        </div>}
      </div>
    </nav>
  )
}

export default Header