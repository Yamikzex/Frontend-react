// PageResult.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageResult = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null); // Estado para el elemento seleccionado
  const [selectedFile, setSelectedFile] = useState(null);
  
  useEffect(() => {
    if (location.state && location.state.selectedFile) {
      setSelectedFile(location.state.selectedFile);
    }
  }, [location.state]);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index); // Cambiar el estado del elemento seleccionado
  };

  return (
    <div className="section-container-result">    
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
        <div className="card-category">
          <div className={`card-category-result ${selectedItem === 0 ? 'selected' : ''}`} onClick={() => handleItemClick(0)}>
            <div className="content-wrapper">
              <div className="text-content-result">
                <p className="title-result">Contenido</p>
              </div>
            </div>
          </div>
          <div className={`card-category-result ${selectedItem === 1 ? 'selected' : ''}`} onClick={() => handleItemClick(1)}>
            <div className="content-wrapper">
              <div className="text-content-result">
                <p className="title-result">JSON</p>
              </div>
            </div>
          </div>
          <div className={`card-category-result ${selectedItem === 2 ? 'selected' : ''}`} onClick={() => handleItemClick(2)}>
            <div className="content-wrapper">
              <div className="text-content-result">
                <p className="title-result">XLS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-json">

          <div className="content-wrapper">
            <div className="json-content">
              <p className='title-json'>JSON</p>
              <img className="image-drag" src="icon-drag.png" alt="Icono copypaste" />
              <img className="image-copy" src="icon-copypaste.png" alt="Icono copypaste" />
              <img className="image-json" src="icon-download.png" alt="Icono copypaste" />
            </div>
          </div>
        </div>

        <div className="card-result">
          {/* Contenido del card Result */}
        </div>
      </div>
    </div>
  );
}

export default PageResult
