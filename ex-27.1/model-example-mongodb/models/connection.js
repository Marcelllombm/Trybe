// ultilizando o drive mongodb
const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return MongoClient
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((conn) => conn.db('model_example'))
      .catch((err) => {
        console.error(err);
        process.exit();
      });
};

module.exports = connection;

// const { MongoClient } = require('mongodb');

// const OPTIONS = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }

// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

// let db = null;

// const connection = () => {
//     return db
//     ? Promise.resolve(db)
//     : MongoClient.connect(MONGO_DB_URL, OPTIONS)
//     .then((conn) => {
//     db = conn.db('model_example');
//     return db;
//     })
// };

// module.exports = connection;