import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './error.css'

function Error() {
  return (
    <div>
        <Header/>
        <main className='error_page'>
            <h1>Désolé, cette page n'existe pas.</h1>
        </main>
        <Footer/>
    </div>
  )
}

export default Error