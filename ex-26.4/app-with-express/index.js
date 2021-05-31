const express = require('express'); // importando o express
const app = express();// estanciando o exmpress

//retorna a rota 
// req objeto que capsula todas as informação da requisição
// res trata a resposta do req 

app.get('/',(req, res) => {
  res.send('Hello wold seja bem-vindo');// metado send, devolver a string hello wold
});
// req objeto que capsula todas as informação da requisição
// res trata a resposta do req 

app.listen(3000, ()=> console.log('App rodando na porta 3000'));// fazendo um baid = (body) 

// modificar o package.json para start = "node index.js"
// para ver o resultado npm start ou node index.js



// indepedencia body-parser 
// npm i body-parser

// indepedencia nodemon, com a ele -D so para desenvolvimento ele server para app reiniciar sozinho quando
// tiver um modificação. sem precisar parar e renicial manualmente.
// npm i nodemon -D
// além de instalar você deve acrencentar no packege.json no scripts -> "dev":"nodemon index.js"
/*

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev":"nodemon index.js"
  },
*/

// para rodar no node ultilizar no terminal npm run dev
