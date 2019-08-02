import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  premium: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('User', UserSchema)
