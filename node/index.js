import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configura Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'vistas')));

// Define una ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'vistas', 'index.html'));
});

// Define el puerto en el que Express escuchará las solicitudes
const port = process.env.PORT || 3000;

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}/`);
});
