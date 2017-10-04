const {MongoClient, ObjectID} = require('mongodb');
const connectionString = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(connectionString, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  // db.collection('Todos').find({_id: new ObjectID('59d4909be328cbf152780773')}).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({_id: new ObjectID('59d4909be328cbf152780773')})
  //   .count()
  //   .then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   });

  db.collection('Users').find({name: 'Sergey'})
    .toArray()
    .then((docs) => {
      console.log(`Users found: ${docs.length}`);
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch users', err);
    });

  // db.close();
});