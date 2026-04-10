const db = require("../config/db");

const buscarPorEmail = async (email) => {
  const [rows] = await db.execute(
    `SELECT * FROM usuarios WHERE email = ?`,
    [email]
  );

  return rows[0];
};

const criar = async ({ nome, email, senha, tipo }) => {
  const [resultado] = await db.execute(
    `
    INSERT INTO usuarios (nome, email, senha, tipo)
    VALUES (?, ?, ?, ?)
    `,
    [nome, email, senha, tipo]
  );
  return resultado;
};

// funções abaixo para listar, update e delete de usuários
const listar = async () => {
  const [rows] = await db.execute(`
    SELECT id, nome, email, tipo, created_at
    FROM usuarios
    ORDER BY id DESC
  `);

  return rows;
};

const buscarPorId = async (id) => {
  const [rows] = await db.execute(
    `
    SELECT id, nome, email, tipo, created_at
    FROM usuarios
    WHERE id = ?
    `,
    [id]
  );

  return rows[0];
};

const atualizar = async (id, { nome, email, tipo }) => {
  const [resultado] = await db.execute(
    `
    UPDATE usuarios
    SET nome = ?, email = ?, tipo = ?
    WHERE id = ?
    `,
    [nome, email, tipo, id]
  );

  return resultado;
};

const excluir = async (id) => {
  const [resultado] = await db.execute(
    `DELETE FROM usuarios WHERE id = ?`,
    [id]
  );

  return resultado;
};

const atualizarSenhaPorId = async (id, senha) => {
  const [resultado] = await db.execute(
    `UPDATE usuarios SET senha = ? WHERE id = ?`,
    [senha, id]
  );

  return resultado;
};

module.exports = {
  buscarPorEmail,
  criar,
  listar,
  buscarPorId,
  atualizar,
  excluir,
  atualizarSenhaPorId
};