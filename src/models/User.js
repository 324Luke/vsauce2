const db = require('../Database').connect()
const Schema = require('mongoose').Schema

module.exports = db.model('UserModel', new Schema({
  id: Number,
  name: String,
  balance: Number,
  premium: Boolean
}))
