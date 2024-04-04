// PageText.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";



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

const PageText = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null); // Estado para el elemento seleccionado
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState(""); // Estado para el texto extraído

  useEffect(() => {
    if (location.state && location.state.selectedFile) {
      setSelectedFile(location.state.selectedFile);
    }
  }, [location.state]);

  useEffect(() => {
    if (selectedFile) {
      extractTextFromPDF();
    }
  }, [selectedFile]);

  const extractTextFromPDF = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://localhost:8000/extract-text/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setExtractedText(data.text);
    } catch (error) {
      console.error("Error extracting text:", error);
    }
  };

  const handleButtonReturn = () => {
    // Redirigir a la página de home
    navigate("/home");
  };

  return (
    <div className="section-container-result">
      <button className="button-home" onClick={handleButtonReturn}>
        <img className="home-return" src="home.png" alt="Regresar" />
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
                <p className="title-images">Contenido</p>
                  <img className="image-copypaste"  onClick={() => copyToClipboard(extractedText)} src="icon-copypaste.png" alt="Icono copiar" />
                  <img className="image-download" onClick={() => downloadTxtFile(extractedText)} src="icon-download.png" alt="Icono descargar" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-result-text"
          style={{ overflowY: "auto", maxHeight: "820px" }}
        >
          <p className="text-extracted">{extractedText}</p>
        </div>
      </div>
    </div>
  );
};

export default PageText;
