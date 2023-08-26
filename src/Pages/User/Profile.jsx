import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './profile.css';
import Account from '../../Components/Account/Account';
import { useDispatch, useSelector } from 'react-redux';
import { editName, selectUser } from '../../Utility/userSlice';
import axios from 'axios';
import Modal from '../../Components/Modal/Modal';


function Profile() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
        <body>
            <Header/>
            <main class="main bg-dark">
                <div class="header">
                    <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
                    <button class="edit-button" onClick= {() => {setOpenModal(true)}}>Edit Name</button>
                </div>
                <h2 class="sr-only">Accounts</h2>
                <Account title='Argent Bank Checking (x8349)' amount="$2,082.79" description="Available Balance"/>
                <Account title='Argent Bank Savings (x6712)' amount="$10,928.42" description="Available Balance"/>
                <Account title='Argent Bank Credit Card (x8349)' amount="$184.30" description="Current Balance"/>
            </main>
            <Footer/>
        </body>
        {openModal ? <Modal closeModal={setOpenModal}/> : null}
    </div>
  )
}

export default Profile