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

  // --- Modelo y rutas de tareas ---
const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
  { title: { type: String, required: true }, done: { type: Boolean, default: false } },
  { timestamps: true }
);
const Task = model("Task", TaskSchema);

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/tasks", async (req, res) => {
  try {
    const task = await Task.create({ title: req.body.title, done: !!req.body.done });
    res.status(201).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get("/tasks", async (_req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

app.delete("/tasks/:id", async (req, res) => {
  const r = await Task.findByIdAndDelete(req.params.id);
  if (!r) return res.status(404).json({ error: "Not found" });
  res.json({ deleted: true });
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

