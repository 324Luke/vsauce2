import Schema from 'mongoose'
import Database from '../Database'

const db = Database.connect()

export default db.model('GuildModel', new Schema.Schema({
  id: Number,
  name: String,
  prefix: Array[String],
  disabledCommands: Array[String]
}))
