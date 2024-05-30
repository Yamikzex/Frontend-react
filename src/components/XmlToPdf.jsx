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

const XmlToPdf = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textoPlano, setTextoPlano] = useState("");

  const handleFileUpload = async (file) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://localhost:8000/uploadXML/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/xmlResult', { state: { selectedFile: file, textoPlano: response.data.texto_plano } });
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
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

  const handleButtonReturn = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="header-cc6"> 
        <img className="prosectoico-1-3qp" src="prosecto.png" alt="Logo" />
        <p className="title-9dx">Prosecto</p>
        <button className="button-regresar-login" onClick={handleButtonReturn}>
        <img className='arrow-home' src="home.png" alt="Regresar" />         
      </button>
      </div>
      <div className="section-xml">
        <div className="container-xml">
          <div className="auto-group-gwfg-NU6">
            <p className="title-xml">Extracción de datos admitida</p>
            <p className="description-xml">Esta herramienta permite convertir datos de XML a texto plano o XMLS.</p>
          </div>
          <div className="list-xml">
            <div className="card-xml">
              <div className="image-container-xml">
                <img className="image-xml" src="xml-pdf.png" alt="Tablas" />
              </div>
              <div className="text-content-xml">
                <p className="title-xml2">XML A TXT</p>
                <p className="subtitle-xml">Convertir XML a TXT</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container2">
          <div className="section-how-it-works">
            <p className="title-HcJ">¿Cómo funciona?</p>
          </div>
          <div className="card-list">
            <div className="card2">
              <div className="content-wrapper">
                <div className="image-container">
                  <img className="image" src="xml.png" alt="Arrastra y suelta el XML" />
                </div>
                <div className="text-content">
                  <p className="title">Arrastra y suelta o selecione el archivo XML</p>
                  <p className="subtitle">Simplemente arrastre y suelte su archivo XML para convertirlo a TXT.</p>
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="content-wrapper">
                <div className="image-container">
                  <img className="image" src="txt.png" alt="Selecciona el archivo" />
                </div>
                <div className="text-content">
                  <p className="title">Visualice su resultado</p>
                  <p className="subtitle">Observe el resultado de su archivo XML a TXT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`section-xml2 ${isDragOver ? 'drag-over' : ''}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="background-xml">
            <div className="container-xml">
              <p className="title-xmlextraer">Extraer datos de XML</p>
              <p className="description-xml2">
                Convierte datos de XML a formato TXT<br /> Con tecnología de Prosecto{' '}
              </p>
              {!isLoading && (
                <>
                  <div className="button-xml-extraer">
                    <input type="file" accept=".xml" onChange={(event) => handleFileUpload(event.target.files[0])} style={{ display: 'none' }} id="file-upload" />
                    <label htmlFor="file-upload" className="primary-xml">
                      Seleccionar archivo
                    </label>
                  </div>
                  <div className="input-PKL">
                    <p>O</p>
                    <p>arrastre el archivo aquí</p>
                  </div>
                </>
              )}
              {isLoading && <Spinner />}
            </div>
          </div>
        </div>
      </div>
      
      <div className="auto-group-renz-8s8">
      <div className="container-TeW">
        <div className="column-ZhY">
          <div className="auto-group-mdr8-gnA">
            <a href="https://prosecto.com.co/" target="_blank">
              <img className="prosectoico-1-dBc" src="prosecto.jpg" alt="Logo" />

            </a>
            <p className="prospectiva-sectorial-y-datos-aplicados-9fk">Prospectiva sectorial y datos<br></br> aplicados</p>
          </div>
          <div className="social-media-RdG">
           <a href="https://twitter.com/prosectosas" target="_blank">
              <img className="makerssocialmediaicons-AKx" src="twiter.png" alt="Twitter Icon" />
            </a>
            <a href="https://www.linkedin.com/company/prosecto/about/" target="_blank">
              <img className="makerssocialmediaicons-tWr" src="lindein.png" alt="LinkedIn Icon" />
            </a>
          </div>
        </div>
        <div className="column-E4v">
          <p className="empresa-Ldk">EMPRESA</p>
          <div className="navigation-links-TyG">Comunicate con nosotros</div>
        </div>
        <div className="column-ywc">
          <p className="productos-uaN">PRODUCTOS</p>
          <div className="navigation-links-S4W">
            <p className="p-caracterizacin-yaE">P-Caracteriza</p>
            <p className="p-doc2db-5NN">P-Doc2DB</p>
          </div>
        </div>
        <div className="column-DDg">
          <p className="servicios-Aei">CONTACTO</p>
          <div className="navigation-links-u6W">
            <div className="auto-group-fj9t-TNv">
              <p className="desarrollo-de-sistemas-Q3G"><b>Teléfono:</b> 300 4003205</p>
              <p className="arquitectura-tecnolgico-LBp"><b>Email:</b> prosecto.sas@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-K3k">© 2024 Prosecto - Todos los derechos reservados.</div>
        </div>
    </div>
  );
}

export default XmlToPdf;
