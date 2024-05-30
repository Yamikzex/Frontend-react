import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PageImage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedImages, setExtractedImages] = useState([]);

  useEffect(() => {
    if (location.state && location.state.selectedFile) {
      setSelectedFile(location.state.selectedFile);
    }
  }, [location.state]);

  const handleButtonReturn = () => {
    navigate('/home');
  };

  const handleExtractImages = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      const response = await fetch('http://localhost:8000/extract-images/', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setExtractedImages(data.images);
    } catch (error) {
      console.error('Error extracting images:', error);
    }
  };

  const handleDownloadImages = () => {
    extractedImages.forEach((image, index) => {
      const blob = new Blob([image], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `image_${index + 1}.jpg`;
      link.type = 'image/jpeg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
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
                <button onClick={handleExtractImages}>Extraer Imágenes</button>
                {extractedImages.length > 0 && (
                  <button onClick={handleDownloadImages}>Descargar Imágenes</button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="card-result-images">
          <p className="title">Contenido</p>
          <div className="image-grid">
            {extractedImages.map((image, index) => (
              <div className="image-frame" key={index}>
                <img
                  src={`data:image/png;base64,${image}`}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageImage;
