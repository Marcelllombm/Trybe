// mesmo banco de dados da aulaMoreira2
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const { ObjectID, ObjectId } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/lecture_27_1';
const DB_NAME = 'live_lecture_27_1';

const app = express();

app.use(bodyParser.json());

const connection = mongodb.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

/* Busca todas as personagens */
app.get('/characters', async (req, res) => {
  try {
    // Chama o método execute de connection com a query desejada
    const rows = await connection.then((db) => db.collection('characters').find().toArray());
    console.log(rows);
    res.status(200).json(rows)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao tentar realizar operação' });
  }
});

/* Cria uma nova personagem */
app.post('/characters', async (req, res) => {
    try {
      const { name, cartoon } = req.body;
  
      const rows = await connection 
        .then((db) => db.collection('characters').insertOne({ name, cartoon }))
        .then((result) => result.ops[0]);
  
      const response = {
        id: rows.insertId,
        name,
        cartoon,
      };
  
      res.status(201).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao tentar realizar operação');
    }
  });


  /* Busca uma personagem por ID */

app.get('/characters/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const rows = await connection.then((db) => 
        ObjectId.isValid(id)
        ? db.collection('characters').findOne({ _id: ObjectID(id) })
        : null
      );
  
      res.status(201).json(rows)
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  });

    /* Atualiza uma personagem por ID */
  app.put('/characters/:id', async (req, res) => {
    try {
      const { name, cartoon } = req.body;
      const { id } = req.params;
  
    await connection.then((db) =>
      db
        .collection('characters')
        .updateOne({ _id: ObjectID(id) }, { $set: { name, cartoon } })
        .then(() => ({ _id: id, name, cartoon }))
    );
  
      const result = { id, name, cartoon }

      res.status(201).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  });

    /* Exclui uma personagem por ID */
  app.delete('/characters/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      await connection.then((db) =>
      ObjectId.isValid(id)
        ? db.collection('characters').deleteOne({ _id: ObjectID(id) })
        : null
      );
  
      res.end()
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  });


app.listen(3001, () => {
  console.log('Ouvindo a porta 3001!');
});