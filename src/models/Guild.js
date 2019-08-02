import mongoose from 'mongoose'
import { commandPrefix } from '@data/config'

const GuildSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  prefix: {
    type: Array,
    default: [ commandPrefix ]
  },
  disabledCommands: {
    type: Array,
    default: [ '' ]
  }
})

export default mongoose.model('Guild', GuildSchema, 'guilds')
