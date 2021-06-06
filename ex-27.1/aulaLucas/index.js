const express = require('express');
const characterRouter = require('./routers/characterRouter');

const app = express();

app.use(express.json());
app.use(characterRouter);

app.listen(3001, ()=>{
  console.log('Ouvindo o porta 3001');
});