var MongoClient = require('mongodb').MongoClient;
var url = "'mongodb+srv://katiemayo:<mongoFish#1>@cluster0-ygm8p.mongodb.net/test?retryWrites=true/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});