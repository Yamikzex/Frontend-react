import React, { useState } from 'react';

const PageExtraer = () => {
  const [selectedItem, setSelectedItem] = useState(null); // Estado para el elemento seleccionado

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index); // Cambiar el estado del elemento seleccionado
  };

  return (
    <div className="section-container">    
        <div className="section-image">
        <img className="image" src="image-reference.png" alt="Arrastra y suelta el PDF" />
      </div>
      <div className="card-list">
        <div className="card-title">
          <div className="content-wrapper">
            <div className="text-content-title">
              <p className="title-principal">Seleccione dato a extraer</p>
            </div>
          </div>
        </div>
        <div className={`card ${selectedItem === 0 ? 'selected' : ''}`} onClick={() => handleItemClick(0)}>
          <div className="content-wrapper">
            <div className="text-content">
              <p className="title">Extraer texto</p>
              <p className="subtitle">Extrae la información del pdf y lo almacena en un archivo .txt</p>
            </div>
            {selectedItem === 0 && <span>✔</span>} {/* Mostrar check si el elemento está seleccionado */}
          </div>
        </div>
        <div className={`card ${selectedItem === 1 ? 'selected' : ''}`} onClick={() => handleItemClick(1)}>
          <div className="content-wrapper">
            <div className="text-content">
              <p className="title">Extraer texto</p>
              <p className="subtitle">Extrae la información del pdf y lo almacena en un archivo .txt</p>
            </div>
            {selectedItem === 1 && <span>✔</span>}
          </div>
        </div>
        <div className={`card ${selectedItem === 2 ? 'selected' : ''}`} onClick={() => handleItemClick(2)}>
          <div className="content-wrapper">
            <div className="text-content">
              <p className="title">Extraer tablas</p>
              <p className="subtitle">Extrae las tablas del pdf en formato json/xlsx lista para mandarla a una base de datos sql</p>
            </div>
            {selectedItem === 2 && <span>✔</span>}
          </div>
        </div>
        <div className="card-button">
         <div className="button-YbY">
            <div className="primary-VFt">Extraer</div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageExtraer;
