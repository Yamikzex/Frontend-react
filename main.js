const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

app.commandLine.appendSwitch('disable-web-security');

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

  // Cargar el archivo HTML de la aplicación
  mainWindow.loadURL("http://localhost:3000");
}

// Evento activado cuando Electron ha terminado de inicializarse y está listo para crear ventanas del navegador.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quitar la aplicación cuando todas las ventanas están cerradas
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
