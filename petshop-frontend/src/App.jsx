import AgendamentoForm from './components/AgendamentoForm.jsx';

function App() {
  return (
    <main className="page">
      <section className="card">
        <div className="header">
          <span className="badge">PetShop</span>
          <h1>Cadastro de Agendamento</h1>
          <p>
            Preencha os dados abaixo para cadastrar um novo atendimento para o pet.
          </p>
        </div>

        <AgendamentoForm />
      </section>
    </main>
  );
}

export default App;
