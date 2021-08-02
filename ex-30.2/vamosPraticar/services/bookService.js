const { Book } = require('../models');

const getAllBooks = async()=>{
  const result = await Book.findAll();
  console.log(result);
  return result;
}

getAllBooks();
module.exports = {
  getAllBooks,
}
