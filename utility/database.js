const mongodb = require("mongodb");
let _db;

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://localhost/node-app")
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => console.log(err));
};

const getdb = () => {
  if (_db) {
    return _db;
  } else {
    throw "no database";
  }
};
module.exports = mongoConnect;
