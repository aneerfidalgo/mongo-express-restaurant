const express = require("express");
const mongo = require("mongodb").MongoClient;
const cors = require("cors");

const app = "express";
app.use(cors());
app.use(express.json());

const url =
  "mongodb+srv://charge_papi235:bocacode@cluster0.ncodo.mongodb.net/?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let videogamesdb, nerdsdb;

mongo.connect(url, options, (err, MongoClient) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("we are connected!");

  app.listen(3000), () => console.log("app is listening on port 3000");

  const db = MongoClient.db("gamestop");
  videogamesdb = db.collection("videogames");
  nerdsdb = db.collection("nerds");

  app.get("/", (req, res) => {
    res.status(200).send("Hey nerds!");
  });
});
