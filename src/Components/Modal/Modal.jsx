import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfil, selectUser } from '../../Utility/userSlice';
import './modal.css'

function Modal({setModal}) {
    const {token, firstName, lastName} = useSelector(selectUser);
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const dispatch = useDispatch();
    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch(editProfil({firstName: newFirstName, lastName : newLastName, token : token}))
        setModal(false);
    }

  return (
    <div className='modal'>
        <section className='modal_container'>
        <button className='close_modal' onClick={() => {setModal(false)}}>X</button>
        <h1 className='text_color'>EDIT NAME</h1>
        <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label className='text_color' htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={(e) => setNewFirstName(e.target.value)} required value={newFirstName}/>
                    </div>
                    <div className="input-wrapper">
                        <label className='text_color' htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={(e) => setNewLastName(e.target.value)} required value={newLastName}/>
                    </div>
                    <button className="sign-in-button">Confirm</button>
        </form>
        </section>
    </div>
  )
}

export default Modal