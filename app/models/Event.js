const mongoose = require('mongoose')

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
    // date: {
    //   type: Date
    //   // required: true
    // },
    // startTime: {
    //   type: Date
    //   // required: true
    // },
    // endTime: {
    //   type: Date
    //   // required: true
    // },
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
