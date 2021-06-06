const express = require('express');
const router = require('./routers/characterRouter');

const app = express();

app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001')
});