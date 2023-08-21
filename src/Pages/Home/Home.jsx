import React from 'react'
import FeatureItem from '../../Components/FeatureItem/FeatureItem'
import iconChat from '../../Img/icon-chat.png';
import iconMoney from '../../Img/icon-money.png';
import iconSecurity from '../../Img/icon-security.png';
import './home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div>
        <Header/>
        <main>
            <div class="hero">
                <section class="hero-content">
                <h2 class="sr-only">Promoted Content</h2>
                <p class="subtitle">No fees.</p>
                <p class="subtitle">No minimum deposit.</p>
                <p class="subtitle">High interest rates.</p>
                <p class="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section class="features">
                <h2 class="sr-only">Features</h2>
                <FeatureItem img={iconChat} title={'You are our #1 priority'} text={'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'}/>
                <FeatureItem img={iconMoney} title={'More savings means higher rates'} text={'The more you save with us, the higher your interest rate will be!'}/>
                <FeatureItem img={iconSecurity} title={'Security you can trust'} text={'We use top of the line encryption to make sure your data and money is always safe.'}/>
            </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Home