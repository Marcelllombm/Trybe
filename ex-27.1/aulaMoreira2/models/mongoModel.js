const connect = require('./mongoConnection');
const { ObjectID, ObjectId } = require('mongodb');

const getAll = async () =>
  connect().then((db) => db.collection('characters').find().toArray());

const add = async (name, cartoon) =>
  connect()
    .then((db) => db.collection('characters').insertOne({ name, cartoon }))
    .then((result) => result.ops[0]);


const getById = async (id) => {
    if (!ObjectId.isValid(id)) return null;

    connect().then((db) =>
      ObjectId.isValid(id)
        ? db.collection('characters').findOne({ _id: ObjectID(id)})
        : null
    );
  };

const update = async (id, name, cartoon) => {
  if (!ObjectId.isValid(id)) return null;
  connect().then((db) =>
    db
      .collection('characters')
      .updateOne({ _id: ObjectID(id) }, { $set: { name, cartoon } })
      .then(() => ({ _id: id, name, cartoon }))
  );
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connect().then((db) =>
    ObjectId.isValid(id)
      ? db.collection('characters').deleteOne({ _id: ObjectID(id) })
      : null
  );
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
}

