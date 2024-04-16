import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Main from './pages/Main';
import Extraer from './pages/Extraer';
import Images from './pages/Images';
import Result from './pages/Result';
import Text from './pages/Text';
import XmlResult from './pages/XmlResultPage';
import Xml from './pages/XmlToPdf';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
