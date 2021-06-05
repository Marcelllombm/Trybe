// importamos o driver do MongoDB
const { MongoClient} = require('mongodb');

/* 
armazenamos as configurações de conexao em um constante para
facilitar a leitura do código 
*/
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// A string de conexão com o banco também é amazenado m uma constante
const MONGO_URL = 'mongodb://127.0.0.1:27017';

// criamos uma variável para realizar "cache" de conexão
let db = null;

//Método que cria uma nova conexão ou retorna a existente
const connection = ()=> 
// usamos um ternário para verificar se já temos uma conexão
// e decidir o que retornar
(db 
// se tivermos, a colocamos dentro de uma Promise já resolvida, utilizando `Promise.resolve`
? Promise.resolve(db)
// caso ainda não tenhamos, criamos uma nova conexão
: MongoClient.connect(MONGO_URL, OPTIONS)
.then((conn) => {
// uma vez com a conexao aberta, a armazenamos na variável 'db'
db = conn.db('model_example')
// Definimos db como o resultado da Promise, que é retornada por connection()
return db;
}));