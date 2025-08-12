require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Puerto dinámico para Render o fijo en local
const port = process.env.PORT || 10000;

// Middleware para JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => {
    console.error("❌ Error de conexión a MongoDB:", err);
    process.exit(1); // Detener si no conecta
  });

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Arrancar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
  console.log(`PUERTO asignado por Render: ${process.env.PORT || "(local)"}`);
});

