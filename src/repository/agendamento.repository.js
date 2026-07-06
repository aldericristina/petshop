import Agendamento from "../models/agendamento.js";

async function criar (dadosAgendamento) {
    return Agendamento.create(dadosAgendamento);
}
 
async function buscarTodos() {
    return Agendamento.find();
}   
async function deletar(id) {
    return Agendamento.findByIdAndDelete(id);
}

const  AgendamentoRepository = { criar, buscarTodos, deletar };
export default AgendamentoRepository;  
