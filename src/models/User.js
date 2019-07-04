import Schema from 'mongoose'
import Database from '../Database'

const db = Database.connect()

export default db.model('UserModel', new Schema.Schema({
  id: Number,
  name: String,
  balance: Number,
  premium: Boolean
}))
