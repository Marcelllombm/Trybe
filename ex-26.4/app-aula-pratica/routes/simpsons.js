const express = require('express');
const rescue = require('express-rescue');
const app = express();
const data = require('../data/simpsons.json');
const fs = require('fs');


//Read (ler)
app.get("/", (req, res) => {
  res.status(200).send(data);
});


// Create (criar)
app.post("/", rescue(async (req, res) => {
  // res.status(200).send({
  //   menssage: "endpoint Post",
  // })

  // console.log(req.body);

  const size = data.length;
  data[size] = {
    id: `${size + 1}`,
    name: req.body.name
  }

  try {
    await fs.promises.writeFile(__dirname + '/../data/simpsons.json', JSON.stringify(data));
    res.status(201).send({
      message: 'salvo com sucesso!'
    })
  } catch (error) {
    throw new Error(error);
  }
}));



// Update (Atualizar)
//put para atualizar varias informação ao mesmo tempo
//patch para atualizar um informação

app.put("/:id", async (req, res) => {
console.log(req.params);
const{id } = req.params;
const {name} = req.body;
data[id -1].name = name;

try {
    await fs.promises.writeFile(__dirname + '/../data/simpsons.json', JSON.stringify(data));
    res.status(200).send({
      message: 'salvo com sucesso!'
    })
  } catch (error) {
    throw new Error(error);
}

});

//  Delete (excluir) 
app.delete("/:id", async (req, res) => {
  const{id } = req.params;
  const index = id - 1;
  data.splice(index, 1);
  
  try {
      await fs.promises.writeFile(__dirname + '/../data/simpsons.json', JSON.stringify(data));
      res.status(204).send()
    } catch (error) {
      throw new Error(error);
  }
  
  });



module.exports = app;
