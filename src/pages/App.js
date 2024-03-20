import React from 'react';
import './App.css'; 

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import DataExtraction from '../components/DataExtraction';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <DataExtraction />
      <HowItWorks />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
