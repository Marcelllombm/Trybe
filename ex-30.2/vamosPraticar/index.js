const express = require('express');
const bookRouter = require('./routes/bookRoute');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(bookRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`Ouvindo na porta ${PORT}`);
});