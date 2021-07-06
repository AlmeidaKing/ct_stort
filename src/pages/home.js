import React from 'react';

import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import AboutTC from '../components/AboutTC';


function Home() {
  return (
    <>
      <Header />
      <AboutTC />
      <ServicesSection />
    </>
  );
}

export default Home;