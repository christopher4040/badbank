const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
let db = null;

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  console.log("Connected successfully to db server");
  db = client.db("myproject");
});

function create(name, email, password) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    const doc = { name, email, password, balance: 0 };
    collection.insertOne(doc, { w: 1 }, (err, result) => {
      err ? reject(err) : resolve(doc);
    });
  });
}

function all() {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({})
      .toArray((err, docs) => {
        err ? reject(err) : resolve(docs);
      });
  });
}

function one(email) {
  return new Promise((resolve, reject) => {
    const customer = db
      .collection("users")
      .find({ "email" : email })
      .toArray((err, doc) => {
        err ? reject(err) : resolve(doc);
      });
  });
}

function deposit(email, amount) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    const update = collection.updateOne(
      { email: email },
      { $inc: { balance: Number(amount) } },
      (err, result) => {
        err ? reject(err) : resolve(all());
      }
    );
  });
}

function withdraw(email, amount) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    const update = collection.updateOne(
      { email: email },
      { $inc: { balance: Number(-(amount)) } },
      (err, result) => {
        err ? reject(err) : resolve(all());
      }
    );
  });
}

module.exports = { create, all, one, deposit, withdraw };
