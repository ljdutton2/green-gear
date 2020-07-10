const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String, required: true },
    branch: { type: String},
    posts : [{ type: Schema.Types.ObjectId, ref: "Post" }]
  })

UserSchema.pre('findOne', function (next) {
    this.populate('posts')
    next()
})

UserSchema.pre('find', function (next) {
    this.populate('posts')
    next()
})
  
const User = mongoose.model('User', UserSchema)

module.exports = User