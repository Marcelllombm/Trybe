const mysql = require('mysql2/promise');

const conn = mysql.createPool({
  host:'localhost',
  user:'master',
  password:'master123',
  database:'db27_1',
  port:'3306'
});

const getAll = async () =>{
  const [rows] = await conn.execute('SELECT * FROM characters');
  return rows;
}

const getById = async (id)=>{
  const [row] = await conn.execute('SELECT * FROM characters WHERE id=?', [id]);
  return row
}

const add = async(name, cartoon)=>{
  const [row] = await conn.execute(
    'INSERT INTO characters (name, cartoon) VALUES (?,?)', 
    [name, cartoon] ); 
  return {
      id: row.insertId,
      name,
      cartoon
    };
  
}

const update = async(id,name,cartoon) => {
  await conn.execute(
    'UPDATE characters SET name = ?, cartoon = ? WHERE id =?',
    [name, cartoon, id]
  );
 
  const result = {id, name, cartoon};
  console.log(result);
  return result;

};

const exclude = async (id) =>{
  await conn.execute(
    'DELETE FROM characters WHERE id=?',
    [id]
  )
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};