import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importamos Axios para realizar la solicitud HTTP

const MainSection = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = async (file) => {
    // Creamos un objeto FormData para enviar el archivo al servidor
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Realizamos la solicitud POST al servidor con Axios
      const response = await axios.post('http://localhost:8000/uploadfile/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Aseguramos que el servidor interprete los datos como un formulario multipart
        }
      });

      // Si la solicitud fue exitosa, mostramos el mensaje de éxito
      console.log(response.data.message);
    } catch (error) {
      // Si ocurre un error, mostramos el mensaje de error
      console.error('Error:', error);
    }

    // Navegamos a la página de extracción
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
    handleFileUpload(file); // Llamamos a la función handleFileUpload con el archivo arrastrado y soltado
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
            Convierte datos de PDF al formato que desees <br /> Con tecnología de Prosecto{' '}
          </p>
          <div className="button-YbY-extraer">
            <input type="file" accept=".pdf" onChange={(event) => handleFileUpload(event.target.files[0])} style={{ display: 'none' }} id="file-upload" />
            <label htmlFor="file-upload" className="primary-VFt">
              Extraer datos
            </label>
          </div>
          <div className="input-PKL">
            <p>O</p>
            <p>arrastra el archivo aquí</p>
          </div>
        </div>
      </div>
    </div>
  );
};;

export default MainSection;
