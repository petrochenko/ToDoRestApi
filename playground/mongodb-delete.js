const {MongoClient, ObjectID} = require('mongodb');
const connectionString = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(connectionString, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Todos')
  //   .deleteMany({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // deleteOne
  // db.collection('Todos')
  //   .deleteOne({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // findOneAndDelete
  // db.collection('Todos')
  //   .findOneAndDelete({complited: false})
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users')
    .deleteMany({name: 'Sergey'})
    .then((result) => {
      console.log(`Was deleted ${result.deletedCount} user(s)`);
    });
  db.collection('Users')
    .findOneAndDelete({_id: new ObjectID("59d495a8c15ddb285c7b2804")})
    .then((result) => {
      console.log(result);
    });

  // db.close();
});