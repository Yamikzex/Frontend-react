import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const XmlResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (location.state && location.state.selectedFile) {
      setSelectedFile(location.state.selectedFile);
    }
  }, [location.state]);


  const handleButtonReturn = () => {
    navigate('/xml');
  };

  return (
    <div className="section-container-extraer-xml">
      <button className="button-regresar-xml" onClick={handleButtonReturn}>
        <img className='arrow-return-xml' src="arrow-return.png" alt="Regresar" />         
      </button>

      <div className="section-image-xml-pdf">
        {selectedFile && (
          <iframe
            src={URL.createObjectURL(selectedFile)}
            width="800px"
            height="800px"
            title="Preview PDF"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default XmlResult;
