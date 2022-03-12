// // Express docs: http://expressjs.com/en/api.html
// const express = require('express')
// // Passport docs: http://www.passportjs.org/docs/
// const passport = require('passport')

// // pull in Mongoose model for events
// const Event = require('../models/Event')

// // this is a collection of methods that help us detect situations when we need
// // to throw a custom error
// const customErrors = require('../../lib/custom_errors')

// // we'll use this function to send 404 when non-existent document is requested
// const handle404 = customErrors.handle404
// // we'll use this function to send 401 when a user tries to modify a resource
// // that's owned by someone else
// const requireOwnership = customErrors.requireOwnership

// // this is middleware that will remove blank fields from `req.body`, e.g.
// // { event: { title: '', text: 'foo' } } -> { event: { text: 'foo' } }
// // const removeBlanks = require('../../lib/remove_blank_fields')
// // passing this as a second argument to `router.<verb>` will make it
// // so that a token MUST be passed for that route to be available
// // it will also set `req.user`
// const requireToken = passport.authenticate('bearer', { session: false })

// // instantiate a router (mini app that only handles routes)
// const router = express.Router()

// // CREATE
// // POST
// router.post('/events/:id/rsvp/', requireToken, (req, res, next) => {
//   const rsvpData = req.body
//   const eventId = req.params.eventId

//   Event.findById(eventId)
//     .then(handle404)
//     .then((event) => {
//       event.rsvp.push(rsvpData)
//       return event.save()
//     })
//     .then((event) => res.status(201).json({ event: event }))
//     .catch(next)
// })

// // DESTROY
// // DELETE
// router.delete('/events/:id/rsvp/:id', requireToken, (req, res, next) => {
//   const id = req.params.id
//   const eventId = req.params.eventId
//   Event.findById(eventId)
//     .then(handle404)
//     .then((event) => {
//       requireOwnership(req, event)
//       event.rsvp.id(id).remove()
//       return event.save()
//     })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })

// module.exports = router
