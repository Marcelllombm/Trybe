const express = require('express');
const authorization = require('./authMiddleware');
const app = express();
const port = 3000;
const fs = require('fs');

const generateToken = require('./generateToken');
const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

app.use(express.json());
app.use(authorization);

app.get('/', (req, res) => {
  
  res.json({
    message: 'servidor rodando' 
  });
});

// exercicio 1
app.get('/ping', (req, res) => {
  res.json({
    message: 'pong'
  });
});

// exercicio 2
app.post('/hello', (req, res) => {
  const name = req.body.name;
  res.json({ "message": `Hello, ${name}` }).status(200);
});


// exercicio 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  try {
    if (parseInt(age, 10) > 17) {
      res.json({ "mensage": `Hello ${name}` }).status(200);
    } else {
      res.json({ "mensage": "Unauthorized" }).status(401);
    }
  } catch (err) {
    console.error(err);
  }
});

// exercicio 4
app.put(('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
}));


// exercicio 5
// criar um arquivos json simpson.json

// exercicio 6
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsons);
}))

// exercicio 7
app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpson = simpsons.find(({ id }) => id === req.params.id);
    console.log(simpson);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

// exercicio 8
app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);

// bonus 1
// adicionando linha 2 e 12
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

// bonus 2

app.post('/signup', (req, res) => {
  const { email, passowrd, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
})

app.listen(port, (error) => {
  if (error) {
    console.log("error no servidor");
  } else {
    console.log("Servidor (200) ok!!!");
  }
});
