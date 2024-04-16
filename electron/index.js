const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

const express = require('express');
const cors = require('cors');
const localServerApp = express();
const PORT = 3000;


const startLocalServer = (done) => {
  localServerApp.use(express.json({ limit: '100mb' }));
  localServerApp.use(cors());
  localServerApp.use(
    express.static(path.join(__dirname, './build/'), { fallthrough: true })
  );
  localServerApp.listen(PORT, async () => {
    console.log('Server Started on PORT ', PORT);
    done();
  });
};

function createWindow() {
  // Obtener el tamaño de la pantalla
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window with appropriate dimensions
  const mainWindow = new BrowserWindow({
    width: width * 1, // Por ejemplo, el 80% del ancho de la pantalla
    height: height * 1, // Por ejemplo, el 80% de la altura de la pantalla
    resizable: true,
    maximizable: true,
    fullscreenable: true,
    //frame: false, // No es necesario especificar frame: false para tener el marco predeterminado
    icon: path.join(__dirname, 'public', 'prosecto.png'), // Ruta al archivo de icono
  });

  mainWindow.webContents.openDevTools();

  const appUrl = `http://localhost:${PORT}`;

  // Cargar el archivo HTML de la aplicación
  mainWindow.loadURL(appUrl);
}

// Evento activado cuando Electron ha terminado de inicializarse y está listo para crear ventanas del navegador.
app.whenReady().then(() => {
  if (app.isPackaged) {
    startLocalServer();
  }
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quitar la aplicación cuando todas las ventanas están cerradas
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
