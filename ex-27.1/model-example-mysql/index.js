const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');

const Book = require('./models/Book');

app.use(express.json());

// app.get('/books', async(req, res)=>{
//   console.log('oi oi oi oi');
// });

app.get('/authors', async (_req, res) =>{
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res)=>{
  try{
    const {id} = req.params;

    const author = await Author.findById(id);
    if(!author) return res.status(404).json({message: 'Not found'});
  res.status(200).json(author);
  }catch(err){
    console.error(err)
    res.status(500).send("erro entre em contato com admin");
  }  

});

app.post('/authors', async (req, res)=>{
  const { first_name, middle_name, last_name} = req.body;

  if(!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({message: 'Dados Iválidos'});
  }

  await Author.create(first_name, middle_name, last_name);
  res.status(201).json({message: 'Autor criado com sucesso!'});

});

// verificar os livro
app.get('/books', async (req, res) => {

  const {author_id} = req.query;

  const books = (author_id) ? await Book.getByAuthorId(author_id) : await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res)=>{
  const { id } = req.params;

  const book = await Book.getById(id);

  if(!book) return res.status(404).json({ message: 'Book no found'});

  res.status(200).json(book);

});

app.post('/books', async (req, res) =>{
  const {title, author_id} = req.body;

  if(!await Book.isValid(title, author_id)){
    return res.status(400).json({message: 'Dados inválidos'});
  }
  await Book.create(title, author_id);

  res.status(201).json({message: 'Livro criado com sucesso!'});
});

app.listen(port, ()=>{
  console.log('Example app listening on port port');
});
