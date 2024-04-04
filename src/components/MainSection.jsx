import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Spinner component
const Spinner = () => (
  <div className="spinner">
    <div className="loader"></div>
    <p>Cargando...</p>
  </div>
);

const MainSection = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (file) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/uploadfile/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }

    setIsLoading(false);

    navigate('/extraer', { state: { selectedFile: file } });
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    handleFileUpload(file);
  };

  return (
    <div
      className={`section-zuU ${isDragOver ? 'drag-over' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="background-image">
        <div className="container-JvA">
          <p className="title-2bG">Extraer datos de PDF</p>
          <p className="description-wiE">
            Convierte datos de PDF a formato JSON, XLS o llévelo a su base de datos  <br /> Con tecnología de Prosecto{' '}
          </p>
          {!isLoading && ( // Si no está cargando, mostrar botón y texto
            <>
              <div className="button-YbY-extraer">
                <input type="file" accept=".pdf" onChange={(event) => handleFileUpload(event.target.files[0])} style={{ display: 'none' }} id="file-upload" />
                <label htmlFor="file-upload" className="primary-VFt">
                  Seleccionar archivo
                </label>
              </div>
              <div className="input-PKL">
                <p>O</p>
                <p>arrastre el archivo aquí</p>
              </div>
            </>
          )}
          {isLoading && <Spinner />} {/* Mostrar el spinner si está cargando */}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
