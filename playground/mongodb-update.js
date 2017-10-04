const {MongoClient, ObjectID} = require('mongodb');
const connectionString = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(connectionString, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // findOneAndUpdate

  // db.collection('Todos')
  //   .findOneAndUpdate(
  //     {_id: new ObjectID('59d4909be328cbf152780773')},
  //     {$set: {completed: false}},
  //     {returnOriginal: false}
  //     )
  //   .then(result => {
  //     console.log(result);
  //   })

  db.collection('Users')
    .findOneAndUpdate(
      {_id: new ObjectID('59d4990b60194c4218f55244')},
      {
        $set: {name: 'Sergey'},
        $inc: {age: -2}
      },
      {returnOriginal: false}
    ).then(result => {
      console.log(result);
    })

  // db.close();
});