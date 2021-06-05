const connection = require('./connection');
const {ObjectId} = require('mongodb');

const Author = require('./Author');

const getAll = async () => {

  return connection()
  .then((db)=> db.collection('books').find().toArray())

};

const getByAuthorId = async (authorId) => {
  return await connection()
  .then((db) => db.collection('books')
  .find({ author_id: Number(authorId) })
  .toArray())
}

const getById = async (id)=>{
  const book = await connection()
  // Aqui é importante notar que a rota já deve ter verificado que `id` é uma string hexadecimal
  // de 24 caracteres. Caso contrário, receberemos um erro ao converter o id para `ObjectId`.
  .then((db) => db.collection('books').findOne(new ObjectId(id)));

  // Caso o livro não seja encontrado, retornamos `null`.
  if (!book) return null;

  // Caso o livro seja encontrado, retornamos seus dados.
  return book;
}

const isValid = async (title, authorId) => {
  // Se o título não existir ou não for uma string, retornamos false
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  // Se o ID do autor não for informado ou não for um número, ou se o autor em questão não existir,
  // retornamos falso
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  // Caso ambos os campos sejam válidos, retornamos true.
  return true;
};

const create = async (title, authorId) => connection.execute(
  // `title` e `author_id` são passados como parâmetros para serem substituídos na query
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
  );


module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create,
}
