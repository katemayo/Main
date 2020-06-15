
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://katiemayo:<password>@cluster0-ygm8p.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
