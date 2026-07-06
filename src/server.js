import dotenv from "dotenv"; 
import app from "./app.js";
import conectarDB from "./config/db.js";

dotenv.config();
const PORT=process.env.PORT;
try {   
conectarDB();

app.listen(PORT, () => {
  console.log(`Conectado com a porta ${PORT} com sucesso!`);
});

} catch (error) {
  console.error("Erro ao iniciar servidor:", error);
}


