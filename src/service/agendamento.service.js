import AgendamentoRepository from "../repository/agendamento.repository.js";
async function cadastrar({nomePet,especie,nomeDono, telefoneDono, serviço,data}){

let valor =0

if (especie == "cao"){
switch ( serviço){
case "Banho":
valor = 50
bresk
case  "Tosa":
valor = 60
break
case "Banho e Tosa":
valor =100
break 
}
}
if (especie == "gato"){
    switch ( serviço){
case "Banho":
valor =60
bresk
case  "Tosa":
valor =70
break
case "Banho e Tosa":
valor =110
break 
}
}
if (especie == "outro"){
switch ( serviço){
case "Banho":
valor =40
bresk
case  "Tosa":
valor =50
break
case "Banho e Tosa":
valor =80
break 
}}
const agendamento=await AgendamentoRepository.criar({
    nomePet,
    especie,
    telefoneDono,
    nomeDono,
    serviço,   
    data,
    valor,
})
 return agendamento;  
}

async function deletar(id){
    return await AgendamentoRepository.deletar(id);
}   

async function buscarTodos(){
   const usuarios= await AgendamentoRepository.buscarTodos();
   return usuarios;
}   
const AgendamentoService= {
    cadastrar,
    buscarTodos,
    deletar 
}

export default AgendamentoService;
