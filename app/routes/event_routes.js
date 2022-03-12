// Express Library
const express = require('express')
// Passport Library
const passport = require('passport')

// Pulling in Mongoose Event Models for Events
const Event = require('../models/Event')

// Collection of methods helping detect situations when we need to throw a customer errors
const customErrors = require('../../lib/custom_errors')

// Function to send 404 when non-existent document is requested
const handle404 = customErrors.handle404

// Function to send 401 when a user tries to modify a resource by another user
const requireOwnership = customErrors.requireOwnership

// Middleware to remove blank fields
const removeBlanks = require('../../lib/remove_blank_fields')

// Argument to require a token in order to provide access to routes
const requireToken = passport.authenticate('bearer', { session: false })

// Instantiate a router
const router = express.Router()

// POST ROUTES

// INDEX
// GET /events
router.get('/events', requireToken, (req, res, next) => {
  Event.find()
    // Responds with status 200 and JSON of the events
    .then(events => res.status(200).json({ events }))
    // If an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /events/:id
router.get('/events/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Event.findById(req.params.id)
    .populate('rsvp.owner')
    .then(handle404)
    // if `findById` is successful, respond with 200 and `event` JSON
    .then((event) => res.status(200).json({ event }))
    .catch(next)
})

// CREATE
// POST /events
router.post('/events', requireToken, (req, res, next) => {
  // Set owner of new event to be current user
  req.body.event.owner = req.user.id
  console.log(req.body)

  Event.create(req.body.event)
    // Respond to successful `create` with status 201 and JSON of the 'event'
    .then(event => {
      res.status(201).json({ event })
    })
    .catch(next)
})

// UPDATE
// PATCH /events/:id
router.patch('/events/:id', requireToken, removeBlanks, (req, res, next) => {
  // If the client attempts to change the `owner` property by including a new owner, prevent that by deleting that key/value pair
  delete req.body.event.owner

  Event.findById(req.params.id)
    .then(handle404)
    // Ensure the signed in user (req.user.id) is the same the event's owner
    .then((event) => requireOwnership(req, event))
    // Updating event objet with postData
    .then((event) => event.updateOne(req.body.event))
    // If that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /events/:id
router.delete('/events/:id', requireToken, (req, res, next) => {
  Event.findById(req.params.id)
    .then(handle404)
    .then(event => requireOwnership(req, event))
    // Delete event from the database (MongoDB)
    .then(event => event.deleteOne())
    // Send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
