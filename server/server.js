const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (error) => {
    res.status(400).send(error);
  });
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo
    .findById(id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((error) => {
    res.status(400).send(error);
  });
});

app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo
    .findByIdAndRemove(id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((error) => {
    res.status(400).send(error);
  });
});

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo
    .findByIdAndUpdate(id, {$set: body}, {new: true})
    .then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((error) => {
    res.status(400).send(error);
  });
});

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Application is started on port + ${port}`);
  });
}

module.exports = {app};
