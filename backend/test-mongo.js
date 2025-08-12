const mongoose = require("mongoose");

const uri = "mongodb+srv://taskmanager_user:Clave1969@cluster0.jjhp5sb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Conectado correctamente a MongoDB");
    process.exit(0); // salir sin error
  })
  .catch(err => {
    console.error("❌ Error conectando a MongoDB:", err);
    process.exit(1); // salir con error
  });
