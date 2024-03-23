import React from 'react';

const PageMain = () => {
  return (
    <div className="background-container">
      <div className="section-image-main">
        <div className="section-image-content">
          <img className="image-text" src="prosecto-text.png" alt="prosecto logo" />
          <img className="image-icon" src="prosecto.png" alt="prosecto logo" />
        </div>
      </div>
      <div>
        <div className="text-title">
          <p className="title-main">Este producto permite extraer información de documentos PDF y llevarla a datos estructurados. Está pensado para extraer información de todo tipo de documentos, como facturas, órdenes de compra, informes de laboratorio, encuestas a clientes. Permitiendo disminuir la carga operativa para usar los datos una vez que la información es extraída.</p>
        </div>
        <div className="button-main">
          <div className="primary-VFt">Abrir</div>
        </div>
      </div>
    </div>
  );
}

export default PageMain;
