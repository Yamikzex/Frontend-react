import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleButtonReturn = () => {
    navigate('/');
  };
  return (
    <div className="header-cc6"> 
      <img className="prosectoico-1-3qp" src="prosecto.jpg" alt="Logo" />
      <p className="title-9dx">Prosecto</p>
      <button className="button-regresar-login" onClick={handleButtonReturn}>
        <img className='arrow-home' src="home.png" alt="Regresar" />         
      </button>
    </div>
  );
}

export default Header;
