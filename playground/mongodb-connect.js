const {MongoClient, ObjectID} = require('mongodb');
const connectionString = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(connectionString, (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   comleted: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to inser todo.');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Fill',
    age: 32,
    location: 'Russia'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to inser todo.');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});