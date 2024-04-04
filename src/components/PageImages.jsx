// PageImage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const PageImage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  
  useEffect(() => {
    if (location.state && location.state.selectedFile) {
      setSelectedFile(location.state.selectedFile);
    }
  }, [location.state]);

  const handleButtonReturn = () => {


    // Redirigir a la página de home
    navigate('/home');
  };
  return (
    <div className="section-container-result">    
      <button className="button-home" onClick={handleButtonReturn}>
        <img className='home-return' src="home.png" alt="Regresar" />         
      </button>
      <div className="section-image">
        {selectedFile && (
          <iframe
            src={URL.createObjectURL(selectedFile)}
            width="800px"
            height="800px"
            title="Preview PDF"
          ></iframe>
        )}
      </div>
      <div className="card-list">
        <div className="card-image">
          <div className="card-category-image">
            <div className="content-wrapper">
              <div className="text-content-images">
                <p className="title-images-contenido">Contenido</p>
              </div>
            </div>
          </div>
      </div>
        <div className="card-result-images">
          {/* Contenido del card Result images */}
          
        </div>
      </div>
    </div>
  );
}

export default PageImage
