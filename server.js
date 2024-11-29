const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Conexão com o banco
const db = new sqlite3.Database('./database/empresas.db');

// Rota para obter empresas
app.get('/api/empresas', (req, res) => {
  db.all('SELECT * FROM empresas', [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

// Rota para atualizar o status de uma empresa
app.post('/api/empresas/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  db.run('UPDATE empresas SET status = ? WHERE id = ?', [status, id], function (err) {
    if (err) return res.status(500).send(err.message);
    res.json({ message: 'Status atualizado com sucesso.' });
  });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
