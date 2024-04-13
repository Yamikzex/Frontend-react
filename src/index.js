import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Extraer from './pages/Extraer';
import Result from './pages/Result';
import App from './pages/App';
import Main from './pages/Main';
import Images from './pages/Images';
import Text from './pages/Text';
import Xml from './pages/XmlToPdf';
import XmlResult from './pages/XmlResultPage';
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
