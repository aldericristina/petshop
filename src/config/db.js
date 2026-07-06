import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI=process.env.MONGO_URI;

async function conectarDB () {
    try {
        await mongoose.connect(MONGO_URI);
        console.log ("banco de dados conectado com sucesso");
    }catch (erro) {
        console.log (`Erro ao conectar-secom o banco de dados: ${erro.message}`);
    }
}
export default conectarDB;
