import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './profile.css';
import Account from '../../Components/Account/Account';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Utility/userSlice';
import Modal from '../../Components/Modal/Modal';
import { useNavigate } from 'react-router-dom';


function Profile() {

  const {firstName, lastName, connected} = useSelector(selectUser);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!connected) {
      navigate('/login')
    }
  }, [connected, navigate])

  return (
    <div className='current_page'>
        <Header/>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}</h1>
                <button className="edit-button" onClick= {() => {setOpenModal(true)}}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title='Argent Bank Checking (x8349)' amount="$2,082.79" description="Available Balance"/>
            <Account title='Argent Bank Savings (x6712)' amount="$10,928.42" description="Available Balance"/>
            <Account title='Argent Bank Credit Card (x8349)' amount="$184.30" description="Current Balance"/>
        </main>
        <Footer/>
    {openModal ? <Modal setModal={setOpenModal}/> : null}
    </div>
  )
}

export default Profile