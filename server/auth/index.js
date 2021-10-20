const express = require('express');
const Joi = require('joi');

const db = require('../db/connection');
const users = db.get('users');
/* Had to do a little bit of searching on the monk docs to get it up and running */
users.createIndex('username', { unique: true });

const router = express.Router();
const schema = Joi.object({
  username: Joi.string()
    .regex(/(^[a-zA-Z0-9_]+$)/)
    .min(2)
    .max(30)
    .required(),
  password: Joi.string()
    .min(10)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),
});

// any route in here is pre-pended with /auth/

router.get('/', (req, res) => {
  res.json({
    message: 'auth! 🤔',
  });
});

router.post('/signup', (req, res, next) => {
  const result = schema.validate(req.body);
  if (result.error === null) {
    // make sure username is unique
    users
      .findOne({
        username: req.body.username,
      })
      .then((user) => {
        // if user is undefined, username is not in the db
        res.json({ user });
      });
  } else {
    next(result.error);
  }
});

module.exports = router;
