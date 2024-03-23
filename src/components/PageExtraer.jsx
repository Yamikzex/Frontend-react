import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';


const PageExtraer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Estado para el elemento seleccionado

  useEffect(() => {
    if (location.state && location.state.selectedFile) {
      setSelectedFile(location.state.selectedFile);
    }
  }, [location.state]);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index); // Cambiar el estado del elemento seleccionado
  };

  const handleButtonClick = () => {
    // Aquí puedes realizar las operaciones de extracción necesarias antes de redirigir

    // Redirigir a la página de resultados
    navigate('/result', { state: { selectedFile: selectedFile } });
  };
  return (
    <div className="section-container-extraer">
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
        <div className="card-title">
          <div className="content-wrapper">
            <div className="text-content-title">
              <p className="title-principal">Seleccione dato a extraer</p>
            </div>
          </div>
        </div>
        <div className={`card-extraer ${selectedItem === 0 ? 'selected1' : ''}`} onClick={() => handleItemClick(0)}>
          <div className="content-wrapper">
            <div className="text-content">
              <p className="title-extraer">Extraer imagenes</p>
              <p className="subtitle">Extrae todas las imagenes del pdf guardandolas en jpg</p>
            </div>
            {selectedItem === 0 &&  <img src="check1.png" alt="Selected" className="checkmark-img" />}
          </div>
        </div>
        <div className={`card-extraer ${selectedItem === 1 ? 'selected1' : ''}`} onClick={() => handleItemClick(1)}>
          <div className="content-wrapper">
            <div className="text-content">
              <p className="title-extraer">Extraer texto</p>
              <p className="subtitle">Extrae la información del pdf y lo almacena en un archivo .txt</p>
            </div>
            {selectedItem === 1 &&  <img src="check1.png" alt="Selected" className="checkmark-img" />}
          </div>
        </div>
        <div className={`card-extraer ${selectedItem === 2 ? 'selected1' : ''}`} onClick={() => handleItemClick(2)}>
          <div className="content-wrapper">
            <div className="text-content">
              <p className="title-extraer">Extraer tablas</p>
              <p className="subtitle">Extrae las tablas del pdf en formato json/xlsx lista para mandarla a una base de datos sql</p>
            </div>
            {selectedItem === 2 &&  <img src="check1.png" alt="Selected" className="checkmark-img" />}
          </div>
        </div>
        <div className="card-button">
         <div className="button-extraer" onClick={handleButtonClick}>
            <div className="primary-VFt">Extraer</div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageExtraer;