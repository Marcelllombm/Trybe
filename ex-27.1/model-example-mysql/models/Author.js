// conectar no banco
const connection = require('./connection');


// adicinar o campo fullName para cada author
const getNewAuthor = ({id, firstName, middleName, lastName}) =>{
  const fullName = [firstName, middleName, lastName].filter((name)=>name).join(" ");

  return{
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
};

// tranformando o campo do authors em metado camelCase segunda palavra começa com letra maiuscula
const serialize = (authorData) =>{
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
};

// metodos

// função que retorna todos os autores usando async pq o banco de dando demora
const getAll = async ()=>{
  // pegando o primeiro array , mostrando apena os autores [authors]
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  // return authors;
  
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async(id)=>{
  const [authorData] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?',[id]
  );
  if(authorData.length === 0) return null;
// destrutura os author e transforma camelcase usado o metado serialize
  const {firstName, middleName, lastName} = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });

};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// adcionando dados no mysql
const create = async(firstName, middleName, lastName) =>{
  connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName]
  );
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
}