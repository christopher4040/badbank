const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const dal = require('../db/dal')

app.use(express.static(path.join(__dirname, "..", "build")))
app.use(express.static("public"));

app.use(cors());

app.get("/account/create/:name/:email/:password", (req, res) => {
  dal.create(req.params.name, req.params.email, req.params.password).
  then((user) => {
    console.log('Create:', user);
    res.send(user);
  })
});

app.get("/account/all", (req, res) => {
  dal.all().
  then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

app.get("/account/user/:email", (req, res) => {
  dal.one(req.params.email).
  then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

app.get("/account/deposit/:email/:amount", (req, res) => {
  dal.deposit(req.params.email, req.params.amount).
  then((response) => {
    console.log(response);
    res.send(response);
  });
});

app.get("/account/withdraw/:email/:amount", (req, res) => {
  dal.withdraw(req.params.email, req.params.amount).
  then((response) => {
    console.log(response);
    res.send(response);
  });
});

app.listen(3000, () => {
  console.log("Running on port 3000!");
});
