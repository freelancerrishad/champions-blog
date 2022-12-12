const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
// project details
// username: champions-blog
// password: championsblogrishadprinceisrat
// middle wares
app.use(cors());
app.use(express.json());


// databse connection


const uri = "mongodb+srv://champions-blog:championsblogrishadprinceisrat@cluster0.ls5fxqg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.get("/", (req, res) => {
  res.send("hello from node mongo");
});

app.listen(port, () => {
  console.log(`Listing from ${port}`);
});
