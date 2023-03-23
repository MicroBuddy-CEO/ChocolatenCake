import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';   
import Feature from './components/Feature';
import FeatureBottom from './components/FeatureBottom';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Ourmission from './components/Ourmission';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Video from './components/Video';
import CountDown from './components/CountDown';

const App = () => {
  AOS.init();
  AOS.refresh();
  return (
    <>  
      {/*--------------- header component ------ */}
      <Header/>
      <main>
      {/*--------------- hero component ------ */}
      <Hero/>

      {/* feature section  */}
      <Feature/>
      {/* feature bottom section  */}
      <FeatureBottom/>
      {/* product section  */}
      <Product/>
      {/* video section  */}
      <Video/>
      {/* counter section  */}
      <CountDown/>
      {/* our mission section  */}
      <Ourmission/>
      {/* Testimonials section  */}
      <Testimonials/>
      {/* Gallery section  */}
      <Gallery/>
      </main>
      {/*--------------- footer component ------ */}
      <Footer/>

    </>
  );
};

export default App;