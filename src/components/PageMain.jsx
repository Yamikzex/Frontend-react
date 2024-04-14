import React from 'react';
import { useNavigate  } from 'react-router-dom';

const PageMain = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Aquí puedes realizar las operaciones de extracción necesarias antes de redirigir

    // Redirigir a la página de resultados
    navigate('/home');
  };

  const handleButtonXml = () => {
    // Aquí puedes realizar las operaciones de extracción necesarias antes de redirigir

    // Redirigir a la página de resultados
    navigate('/xml');
  };
  return (
    <div className="background-container">
      <div className="section-image-main">
        <div className="section-image-content">
          <img className="image-text" src="prosecto-text.png" alt="prosecto logo" />
        </div>
      </div>
     <div>
     <div className='columna-login'>
        <div>
        <div className="text-title">
              <p className="title-main">Este producto permite extraer información de documentos PDF y llevarla a datos estructurados. Está pensado para extraer información de todo tipo de documentos, como facturas, órdenes de compra, informes de laboratorio, encuestas a clientes. Permite disminuir la carga operativa para usar los datos una vez que la información es extraída.</p>
            </div>
            <div className="button-main"  onClick={handleButtonClick}>
              <button className="primary-button">Abrir</button>
            </div>
        </div>
        <div>
          <div className="text-title">
            <p className="title-main">Este producto transforma datos estructurados de archivos XML a texto plano o archivos XMLS. Esta transformación busca permitir operar sobre los datos de las facturas devueltos por la DIAN en el contexto de facturación electronica.</p>
          </div>
          <div className="button-main2"  onClick={handleButtonXml}>
            <button className="primary-button">Abrir</button>
          </div>
        </div>
        </div>
     </div>

      <div className="auto-group-renz-8s8">
      <div className="container-TeW">
        <div className="columna-prospectiva">
          <div className="auto-group-mdr8-gnA">
            <p className="texto-prospectiva">Prospectiva sectorial y datos<br></br> aplicados</p>
          </div>
          <div className="redes">
            <a href="https://twitter.com/prosectosas" target="_blank">
              <img className="icon-twiter" src="twiter.png" alt="Twitter Icon" />
            </a>
            <a href="https://www.linkedin.com/company/prosecto/about/" target="_blank">
              <img className="icon-linkein" src="lindein.png" alt="LinkedIn Icon" />
            </a>
          </div>

        </div>
        <div className="columna-empresa">
          <p className="empresa">Comunicate con nosotros</p>
          <div className="textos-empresa"><b>Teléfono:</b> 300 4003205 <br></br><br></br><b>Email:</b> prosecto.sas@gmail.com</div>
        </div>
      </div>
      <div className="section-K3k">© 2024 Prosecto - Todos los derechos reservados.</div>
    </div>
    </div>

    
  );
}

export default PageMain;
