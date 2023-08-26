import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editName, selectUser } from '../../Utility/userSlice';
import './modal.css';
import axios from 'axios';

function Modal({closeModal}) {
    const user = useSelector(selectUser);
    const [firstName, setFistName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const dispatch = useDispatch();
    

    const handleSubmit = async (e) =>{
        e.preventDefault();
         //MODIFY PROFILE INFO
        await axios.put('http://localhost:3001/api/v1/user/profile',{
            firstName: firstName,
            lastName: lastName
            }, 
            {
            headers: {Authorization: `Bearer` + user.token} 
            })
        .then(function (response) {
            dispatch(
                editName(
                {
                    firstName : firstName,
                    lastName : lastName
                })
            )
            closeModal(false);       
        })
        .catch(function (error) {
        });
    }

  return (
    <div className='modal'>
        <section className='modal_container'>
        <button className='close_modal' onClick={() => {closeModal(false)}}>X</button>
        <h1 className='text_color'>EDIT NAME</h1>
        <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label className='text_color' htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={(e) => setFistName(e.target.value)} required value={firstName}/>
                    </div>
                    <div className="input-wrapper">
                        <label className='text_color' htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} required value={lastName}/>
                    </div>
                    <button className="sign-in-button">Confirm</button>
        </form>
        </section>
    </div>
  )
}

export default Modal