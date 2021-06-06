const connect = require('./mysqlConnection');

const getAll = async () => {
  const [rows] = await connect().execute(
    'SELECT * FROM live_lecture_27_1.characters'
  );
  return rows;
};

const getById = async (id) => {
  const [rows] = await connect().execute(
    `SELECT * FROM live_lecture_27_1.characters
    WHERE id = ?`,
    [id]
  );
  return rows;
};

const add = async (name, cartoon) => {
  const [
    row,
  ] = await connect().execute(
    'INSERT INTO live_lecture_27_1.characters (name, cartoon) VALUES (?, ?)',
    [name, cartoon]
  );
  const result = {
    id: row.insertId,
    name,
    cartoon,
  };
  return result;
};

const update = async (id, name, cartoon) => {
  await connect().execute(
    `UPDATE live_lecture_27_1.characters
      SET name = ?, cartoon = ?
      WHERE id = ?`,
    [name, cartoon, id]
  );
  const result = { id, name, cartoon };

  return result;
};

const exclude = async (id) =>
    connect().execute(
    `DELETE FROM live_lecture_27_1.characters
    WHERE id = ?`,
    [id]
  );

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};