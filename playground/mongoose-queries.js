const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '59d658c8cf42f8040c81dede';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
// Todo
//   .findById(id)
//   .then((todo) => {
//       if (!todo) {
//           return console.log('Id not found.');
//       }
//       console.log('Todo', todo);
//   }).catch(e => {
//     console.log(e, undefined, 2);
// });

User.findById('59d765764d78740ddcaeb5f3')
  .then((user) => {
      if (!user) {
          return console.log('Unable to find user.');
      }
      console.log(JSON.stringify(user, undefined, 2));
  }).catch(e => {
    console.log(e, undefined, 2);
});