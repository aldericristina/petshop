import AgendamentoService from "../service/agendamento.service.js"; 

async   function cadastrar(req,res,next){ 
    try {
        const {nomePet, especie, nomeDono, telefoneDono, serviço, data}=req.body;
        const novoAgendamento=await AgendamentoService.cadastrar({
            nomePet,
            especie,        
            nomeDono,
            telefoneDono,
            serviço, 
            data,
        }); 
        res.status(201).json({mensagem: "Agendamento criado com sucesso!", agendamento: novoAgendamento})
    }   catch (erro){
        res.status(401).json({mensagem: `Erro ao criar agendamento: ${erro.message}`})
    }   
   
}
async function buscarTodos(req,res,){
    try {   
        const agendamentos= await AgendamentoService.buscarTodos();
        res.status(200).json({agendamentos})
    } catch (erro){
        res.status(401).json({mensagem: `Erro ao buscar agendamentos: ${erro.message}`})
    }}
async function deletar(req,res,){
    try {   
        const {id}=req.body;
        await AgendamentoService.deletar(id);
        res.status(200).json({mensagem: "Agendamento deletado com sucesso!"})
    } catch (erro){
        res.status(401).json({mensagem: `Erro ao deletar agendamento: ${erro.message}`})
    }}  

const AgendamentoController = {
    cadastrar,
    buscarTodos,
    deletar 
}


export default AgendamentoController;
