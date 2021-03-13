const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const app = require('./app');

//connect database
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//listening port handler
const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`app running on port : ${port}....`);
});