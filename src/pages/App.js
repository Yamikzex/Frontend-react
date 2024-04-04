import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import PageExtraer from '../components/PageExtraer';
import DataExtraction from '../components/DataExtraction';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import Result from '../components/PageResult';
import Images from '../components/PageImages';
import Text from '../components/PageText';
import PageMain from '../components/PageMain';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
         <Route path="/" element={<PageMain />} />
          <Route path="/home" element={
            <>
              <Header />
              <DataExtraction />
              <HowItWorks />
              <MainSection />
              <Footer />
            </>
          } />
          <Route path="/extraer" element={<PageExtraer />} />
          <Route path="/result" element={<Result />} />
          <Route path="/images" element={<Images />} />
          <Route path="/text" element={<Text />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
