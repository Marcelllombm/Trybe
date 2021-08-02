const bookService = require('../services/bookService');

const getAllBooks = async (req, res) =>{
try {
  const result = await bookService.getAllBooks();
  res.status(200).json(result);
} catch (error) {
  res.status(500).json({messagem: error.messagems});
}
};

module.exports ={
  getAllBooks,
}
