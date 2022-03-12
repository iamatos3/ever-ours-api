const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// Events Schema
const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    attire: {
      type: String,
      required: true
    },
    capacity: {
      type: Number,
      required: true
    },
    // rsvp: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Rsvp'
    //   }
    // ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Event', eventSchema)
