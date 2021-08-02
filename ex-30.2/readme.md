# exercicio do conteudo - Sequelize do Zero

crie um pasta chamado exemploSequelize e entre nela. </br>
depois digite esse comando para criar um projeto em node.js
```
npm init -y
```
add o express

```
npm install express
```
Crei um arquivo .gitIgnore para adicionar a pasta node_modules

Crei um arquivo index.js e adicionar o basico do express

```
const express = require("express");

const app = express();
app.use(express.json());

const PORTA = 3000;

app.listen(PORTA, ()=>{
  console.log("Servidor OK!!! ", PORTA)
});

```

instale as dependecias: sequelize,  mysql2 , sequelize-cli

```
npm install sequelize
```

```
npm install mysql2
```

```
npm install --save-dev sequelize-cli
```

Para iniciar o sequelize e preciso roda esse comando

```
npx sequelize-cli init
```
depois de roda esse comando ele criou 4 pastas: config, models, migrations e seeders

A primeira pasta e o "config" onde vamos configura o sequelize no arquivo config.json dentro da pasta config

```
{
  "development": {
    "username": "master",
    "password": "master123",
    "database": "meu_banco",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

o Segundo pasta "Migrations" é um conjunto de dados que ultilizamos para criar estrutura da nossa tabela no banco de dados.</br> como criar, deleta, atualizar e outra coisa. sem precisar ir ao banco de dando e fazer as alteração

crie um migration com nome create-stores
```
npx sequelize migration:generate --name create-stores
```
no arquivo de create-stores adicionar alguns campo id, name, description

```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const StoresTable = queryInterface.createTable("Stores",{
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
      },
     name: {
       allowNull: false,
       type:Sequelize.STRING
     },
     description: {
       allowNull: false,
       type:Sequelize.STRING
     },
   });
   return StoresTable;
  },

  down: async (queryInterface, Sequelize) => {
     
    queryInterface.dropTable("Stores");

  }
};

```
saber alguns comando do sequelize
```
npx sequelize --help
```
rodar o que foi alterado no migrations e criar

```
npx sequelize db:migrate
```
ele desfaz a migrations que foi criado
```
npx sequelize db:migrate:undo
```
terceiro pasta "seeders"  não precisamos adicinar informação manual atraves do migrate

```
npx sequelize seed:generate --name stores
```
bulkInsert e ajudar a inserir multplos dados na tabela
```
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('strores',[
      {
        name: "Magazine",
        description: "Loja que tem eletors"
      },
      {
        name:"Tem de tudo",
        description: "Pode vir que aqui tem tudo"
      }

    ]);
  },

  down: async (queryInterface, Sequelize) => {
   queryInterface.bulkDelete("stores",null,{});
  }
};

```
execultado para inserir o banco
```
$ npx sequelize db:seed:all
```

quarto pasta model que vai ser a represetanção do banco de dado na nossa aplicação
criado o model
```
npx sequelize model:generate --name Store --atributes name:string description:string
```
ou posso criar manoal pois quando criano usado npx modal esse comando ele criar outro migrations

```
const Store = (sequelize, DataTypes) =>{
  const Store = sequelize.define('Store',{ //
    name: DataTypes.STRING,
    description: DataTypes.STRING
  },{
    timestamps:false,
  })
  return Store;
}

module.exports = Store;
```
no index adcionar o get /

```
const express = require("express");
const {Store} = require('./models');

const app = express();
app.use(express.json());

const PORTA = 3000;

app.get('/', (req, res)=>{
  Store.findAll().then(dados =>{
    res.status(200).json(dados)
  }).catch(e=>{
    console.log(e.messagem);
    res.status(500).json({message: "algo deu errado"});
  })
});

app.listen(PORTA, ()=>{
  console.log("Servidor OK!!! ", PORTA)
});
```

Para usar o variavel de  ambiente  e preciso modificar ou criar um arquivo na pasta config com extensão s
exemplo: config.js

e instalar uma biblioteca para fazer o uso da variavel de ambiente

```
npm install dotenv
```
no arquivo config.js  add esse codigo
lembre que e preciso colocar require('dotev).config() para poder usar as variaveis do ambientes

```
require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
};
```
modifique o config.json para o config.js no arquivo index.js na pasta models

```
...
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
...
```
crei o arquivo .env pois vai colocar os valor do variavel do ambiente 
lembre do colocar o no .gitignore esse arquivo

```
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=sequelize_example
HOSTNAME=127.0.0.1
```
quando modificar o arquivo de lugar do sequelize config,migrations,seeders , models
para dentro da pasta src e precisa criar um arquivo .sequelizerc

```
// arquivo .sequelizerc

const path = require('path');

module.exports ={
  'config':path.resolve('src', 'config', 'config.js'),
  'models-path': path:resolve('src','models'),
  'seeders-path': path:resolve('src', 'seeders'),
  'migrations-path': path.resolve('src','migrations'),
};

```

a constante path ele facilita o encontro do arquivo 

obs: quando criamos no models, a tablela fica no sigular exemplo Product no sequelize ele entende que no
banco de dados ela ficar no plural exemplo Products

mais quanda usamo a funçaõ do siquelize freezeTAbleName: true ele fica com mesmo nome da models exemplo product no sigular.
```
// models/Products

const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DateTypes.FLOAT,
  },{
    freezeTableName: true
  });
  return Product;
}

module.exports = Product;
```
