import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CardResultJSON = ({ jsonData }) => (
  <div className="card-result">
    {jsonData && (
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    )}
  </div>
);

const CardResultXLS = () => (
  <div className="card-result">
    {/* Mostrar el resultado de XLS aquí */}
    <p className='text-xls'>Tablas extraidas lista para descargar. Por favor presione el icono de arriba a la derecha para empezar su descarga.</p>
  </div>
);

const CardResultSQL = ({ sqlMessage }) => (
  <div className="card-result">
    <p className='message-sql'>{sqlMessage}</p>
  </div>
);

const PageResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(1); // Establecer JSON como opción por defecto
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [sqlMessage, setSqlMessage] = useState('');

  useEffect(() => {
    if (location.state && location.state.selectedFile) {
      setSelectedFile(location.state.selectedFile);
    }
  }, [location.state]);

  const handleItemClick = (index) => {
    setSelectedItem(prevItem => prevItem === index ? prevItem : index);
  };

  const handleButtonReturn = () => {
    navigate('/home');
  };

  const handleGetJsonData = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);  
      const response = await axios.post('http://localhost:8000/uploadfile/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setJsonData(response.data.jsonData);
      setSqlMessage(`Tablas enviadas correctamente a la base de datos ${response.data.databaseName}.`);
    } catch (error) {
      console.error('Error al obtener JSON desde el backend:', error);
    }
  };

  const handleCopyJson = () => {
    // Copiar JSON al portapapeles
    navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2));
  };

  const handleDownloadExcel = async () => {
    try {
      const response = await axios.get('http://localhost:8000/download-excel/', {
        responseType: 'blob', // Indicar que la respuesta es un blob (archivo binario)
      });
      
      // Crear un enlace temporal y descargar el archivo Excel
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al obtener el archivo Excel:', error);
    }
  };

  const handleDownloadJson = () => {
    // Crear un enlace temporal y descargar el archivo JSON
    const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (selectedFile) {
      handleGetJsonData();
    }
  }, [selectedFile]);

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
        <div className="card-category">
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
          <div className={`card-category-result ${selectedItem === 3 ? 'selected' : ''}`} onClick={() => handleItemClick(3)}>
            <div className="content-wrapper">
              <div className="text-content-result">
                <p className="title-result">SQL</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-json">
          <div className="content-wrapper">
            <div className="json-content">
              <p className='title-json'>{selectedItem === 1 ? "JSON" : selectedItem === 2 ? "XLS" : "SQL"}</p>
              {selectedItem === 1 && (
                <>
                  <img className="image-drag" src="icon-drag.png" alt="Icono copypaste" />
                  <img className="image-copy" src="icon-copypaste.png" alt="Icono copypaste" onClick={handleCopyJson} />
                  <img className="image-json" src="icon-download.png" alt="Icono descarga" onClick={handleDownloadJson} />
                </>
              )}
              {selectedItem === 2 && (
                <img className="image-json2" src="icon-download.png" alt="Icono descarga" onClick={handleDownloadExcel} />
              )}
            </div>
          </div>
        </div>
        {selectedItem === 1 && <CardResultJSON jsonData={jsonData} />}
        {selectedItem === 2 && <CardResultXLS />}
        {selectedItem === 3 && <CardResultSQL sqlMessage={sqlMessage} />}
      </div>
    </div>
  );
}

export default PageResult;
