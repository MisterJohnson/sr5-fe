const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://simonlepage:Jackpot50@shadowrun-shard-00-00-g1ocb.mongodb.net:27017,shadowrun-shard-00-01-g1ocb.mongodb.net:27017,shadowrun-shard-00-02-g1ocb.mongodb.net:27017/sr5?ssl=true&replicaSet=shadowrun-shard-0&authSource=admin', (err, db) => {
    if (err) return console.log(err);

    closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/characters', (req, res) => {
  connection((db) => {
    db.collection('characters')
      .find()
      .toArray()
      .then((characs) => {
        response.data = characs;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

module.exports = router;
