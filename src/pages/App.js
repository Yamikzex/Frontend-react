import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import DataExtraction from '../components/DataExtraction';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import MainSection from '../components/MainSection';
import PageExtraer from '../components/PageExtraer';
import Images from '../components/PageImages';
import PageMain from '../components/PageMain';
import XmlResult from '../components/XmlResult';
import XmlToPdf from '../components/XmlToPdf';

const App = () => {
  return (
    <HashRouter basename='/'>
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
          <Route path="/xml" element={<XmlToPdf />} />
          <Route path="/xmlResult" element={<XmlResult />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
