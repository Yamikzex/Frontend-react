import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const downloadTxtFile = (text) => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "extracted_text.txt";
  document.body.appendChild(element); // Required for this to work in Firefox
  element.click();
};

const XmlResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [textoPlano, setTextoPlano] = useState("");

  useEffect(() => {
    if (location.state && location.state.selectedFile) {
      setSelectedFile(location.state.selectedFile);
      setTextoPlano(location.state.textoPlano);
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
      <div className="card-list">
        <div className="card-image-xml">
          <div className="card-category-image">
            <div className="content-wrapper">
              <div className="text-content-images">
                <p className="title-images-xml">Contenido</p>
                <img className="image-copypaste" onClick={() => copyToClipboard(textoPlano)} src="icon-copypaste.png" alt="Icono copiar" />
                <img className="image-download" onClick={() => downloadTxtFile(textoPlano)} src="icon-download.png" alt="Icono descargar" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-result-xml"
          style={{ overflowY: "auto", maxHeight: "820px" }}
        >
          {textoPlano && (
            <pre>{textoPlano}</pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default XmlResult;
