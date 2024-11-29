const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/empresas.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS empresas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      local TEXT NOT NULL,
      setor TEXT NOT NULL,
      contato TEXT NOT NULL,
      logotipo TEXT NOT NULL,
      status TEXT NOT NULL
    )
  `);

  db.run(`
    INSERT INTO empresas (nome, local, setor, contato, logotipo, status)
    VALUES
      ('Aki Tudo', 'Barra Funda', 'Escola', 'contato@akitudo.com', 'akitudo_logo.png', 'no_ar'),
      ('Exemplo Corp', 'Centro', 'Tecnologia', 'exemplo@corp.com', 'exemplo_logo.png', 'inativa')
  `);
});

console.log("Banco de dados inicializado.");
db.close();
