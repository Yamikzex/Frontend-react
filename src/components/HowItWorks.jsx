import React from 'react';

const HowItWorks = () => {
  return (
    <div className="section-container2">
      <div className="section-how-it-works">
        <p className="title-HcJ">Cómo funciona</p>
      </div>
      <div className="card-list">
        <div className="card2">
          <div className="content-wrapper">
            <div className="image-container">
              <img className="image" src="select.png" alt="Selecciona el archivo" />
            </div>
            <div className="text-content">
              <p className="title">Selecciona el archivo</p>
              <p className="subtitle">Elija los elementos de datos específicos para extraer.</p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="content-wrapper">
            <div className="image-container">
              <img className="image" src="drop.png" alt="Arrastra y suelta el PDF" />
            </div>
            <div className="text-content">
              <p className="title">Arrastra y suelta el PDF</p>
              <p className="subtitle">Simplemente arrastre y suelte su archivo PDF para extraerlo.</p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="content-wrapper">
            <div className="image-container">
              <img className="image" src="boton.png" alt="Extraer datos" />
              
            </div>
            <div className="text-content">
              <p className="title">Extraer datos</p>
              <p className="subtitle">Selecione el tipo de dato a extraer. Haga clic en el botón 'Extraer datos' para iniciar el proceso.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
