# Frontend PetShop - Cadastro de Agendamento

Frontend simples feito com React + Vite para consumir a rota do backend:

POST http://localhost:3000/api/agendamento/cadastro

## Como rodar

```bash
npm install
npm run dev
```

Depois acesse no navegador:

```bash
http://localhost:5173
```

## Como testar

1. Rode o backend em `http://localhost:3000`.
2. Rode o frontend com `npm run dev`.
3. Preencha todos os campos do formulário.
4. Clique em `Cadastrar agendamento`.
5. Se a API responder corretamente, aparecerá a mensagem: `Agendamento criado com sucesso!`.

## Estrutura de pastas

```txt
src/
  components/
    AgendamentoForm.jsx
  services/
    api.js
  styles/
    global.css
  App.jsx
  main.jsx
```
