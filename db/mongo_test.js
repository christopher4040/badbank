const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  console.log("Connected");

  const dbName = "myproject";
  const db = client.db(dbName);

  let name = "user" + Math.floor(Math.random() * 10000);
  let email = name + "@mit.edu";

  let collection = db.collection("customers");
  let doc = { name, email };
  collection.insertOne(doc, { w: 1 }, (err, result) => {
    console.log("Document insert!");
  });

  let customers = db
    .collection("customers")
    .find()
    .toArray((err, docs) => {
      console.log("Collection:", docs);

      // clean up
      client.close();
    });
});
