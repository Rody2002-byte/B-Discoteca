const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente!');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));

app.get("/usuarios", (req, res) => {
  res.json([
    { id_usuario: 1, nombre: "Rodrigo", correo: "rodrigo@mail.com", rol: "admin" },
    { id_usuario: 2, nombre: "Ana", correo: "ana@mail.com", rol: "cliente" },
    { id_usuario: 3, nombre: "Carlos", correo: "carlos@mail.com", rol: "cliente" }
  ]);
});
