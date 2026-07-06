import mongoose from "mongoose";

const agendamentoSchema =  new mongoose.Schema({
    nomePet:{
      type: String,
    required: [ true, " O nome do pet é obrigatorio."],
    },
    especie:{
      type: String,
      required: [true, "A especie do pet é obrigatoria"],
      enum: {
        values: [ "Cao","Gato","Outro"],
        message: "A especie deve ser Cão, Gato ou outro"
      }
    },
    nomeDono: {
     type: String,
     required: [ true, "O nome do dono é obrigatorio"], 
    },
    telefoneDono: {
        type: String,
        required: [true, "O telefone do dono é obrigatorio"],
    },
    serviço: {
    type: String,
    required: [true, "O serviço é obrigatorio"],
    enum: {
        values: ["Banho", "Tosa", "Banho e Tosa"],
        message: "O Serviço deve ser Banho, Tosa ou Banho e Tosa",
    }
    },
    data: {
        type: String,
        required: [true, "Data é obrigatorio"],
     },
     valor: {
        type: Number,
     },
     status: {
        type: String,
        default: "Agendado", 
        enum: {
        values: ["Agendado","Concluído","Cancelado"],
            message: "O serviço deve ser Agendado, Concluído ou Cancelado",
        }
     }
});
const Agendamento= mongoose.model("Agendamentos", agendamentoSchema)

export default Agendamento;

