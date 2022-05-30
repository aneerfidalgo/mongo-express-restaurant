require(dotenv / config);
const express = require("express");
const mongo = require("mongodb").MongoClient;
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const url = process.env.MONGO_URL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
let menudb, costumersdb;

mongo.connect(url, options, (err, mongoClient) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("we are connected!");

  app.listen(3000, () => console.log("app is listening on port 3000"));

  const db = mongoClient.db("restaurant");
  costumersdb = db.collection("costumers");
  menudb = db.collection("menu");
});
//get
app.get("/", (req, res) => {
  res.status(200).send("Hey class!");
});

//post
app.post("/", (req, res) => {
  console.log("this is the req", req.body);
  const dish1 = { name: "leche de tigre" };

  menudb.insertOne(req.body);
  res.status(201).send("leche de tigre ");
});
//patch
//delete
