import React from 'react';

import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import AboutTC from '../components/AboutTC';
import AboutTrainer from '../components/AboutTrainer';

function Home() {
  return (
    <>
      <Header />
      <AboutTC />
      <ServicesSection />
      <AboutTrainer />
    </>
  );
}

export default Home;
