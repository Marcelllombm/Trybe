const mongodb = require('mongodb').MongoClient;
const MONGO_DB_URL = 'mongodb://localhost:27017/lecture_27_1';
const DB_NAME = 'live_lecture_27_1';

module.exports = () =>
  mongodb.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((connection) => connection.db(DB_NAME))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

