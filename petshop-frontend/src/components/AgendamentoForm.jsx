import { useState } from 'react';
import { cadastrarAgendamento } from '../services/api.js';

const estadoInicial = {
  nomePet: '',
  especie: '',
  nomeDono: '',
  telefoneDono: '',
  servico: '',
  data: '',
};

function AgendamentoForm() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  function atualizarCampo(evento) {
    const { name, value } = evento.target;

    setFormulario((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value,
    }));
  }

  function validarCampos() {
    if (!formulario.nomePet.trim()) return 'O nome do pet é obrigatório.';
    if (!formulario.especie.trim()) return 'A espécie é obrigatória.';
    if (!formulario.nomeDono.trim()) return 'O nome do dono é obrigatório.';
    if (!formulario.telefoneDono.trim()) return 'O telefone do dono é obrigatório.';
    if (!formulario.servico.trim()) return 'O serviço é obrigatório.';
    if (!formulario.data) return 'A data é obrigatória.';

    return '';
  }

  async function enviarFormulario(evento) {
    evento.preventDefault();

    setErro('');
    setSucesso('');

    const mensagemErro = validarCampos();
    if (mensagemErro) {
      setErro(mensagemErro);
      return;
    }

    try {
      setLoading(true);
      const resposta = await cadastrarAgendamento(formulario);
      setSucesso(resposta.mensagem || 'Agendamento criado com sucesso!');
      setFormulario(estadoInicial);
    } catch (error) {
      const mensagemApi = error.response?.data?.mensagem;
      setErro(mensagemApi || 'Não foi possível cadastrar o agendamento. Verifique se o backend está rodando.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="form" onSubmit={enviarFormulario}>
      {erro && <div className="message error">{erro}</div>}
      {sucesso && <div className="message success">{sucesso}</div>}

      <div className="form-grid">
        <label>
          Nome do pet
          <input
            type="text"
            name="nomePet"
            value={formulario.nomePet}
            onChange={atualizarCampo}
            placeholder="Ex: Rex"
          />
        </label>

        <label>
          Espécie
          <input
            type="text"
            name="especie"
            value={formulario.especie}
            onChange={atualizarCampo}
            placeholder="Ex: Cachorro"
          />
        </label>

        <label>
          Nome do dono
          <input
            type="text"
            name="nomeDono"
            value={formulario.nomeDono}
            onChange={atualizarCampo}
            placeholder="Ex: Nicolas"
          />
        </label>

        <label>
          Telefone do dono
          <input
            type="tel"
            name="telefoneDono"
            value={formulario.telefoneDono}
            onChange={atualizarCampo}
            placeholder="Ex: 42999999999"
          />
        </label>

        <label>
          Serviço
          <select
            name="servico"
            value={formulario.servico}
            onChange={atualizarCampo}
          >
            <option value="">Selecione</option>
            <option value="Banho">Banho</option>
            <option value="Tosa">Tosa</option>
            <option value="Banho e Tosa">Banho e Tosa</option>
            <option value="Consulta">Consulta</option>
          </select>
        </label>

        <label>
          Data
          <input
            type="date"
            name="data"
            value={formulario.data}
            onChange={atualizarCampo}
          />
        </label>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Cadastrando...' : 'Cadastrar agendamento'}
      </button>
    </form>
  );
}

export default AgendamentoForm;
