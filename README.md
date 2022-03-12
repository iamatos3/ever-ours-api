# Ever Ours: An Event Application where couples can create and share their love with friends and family!

This application allows the user to do create, update, and RSVP to the events they create onto one application. I came up with this idea to keep it wedding themed as I already work in the wedding industry and understand how important it is for couples to be able to keep their plans organized while leading up to their big day.

## Setup Steps

1. [Fork and clone](https://github.com/iamatos3/ever-ours-client) this repository.
1. Run `install command` to install all dependencies
1. Use `start command` to spin up the server.

## Important Links

- [Deployed API](https://dry-island-85955.herokuapp.com/)
- [Deployed Client](https://iamatos3.github.io/ever-ours-client/)

## Planning Story

After brainstorming the idea of this event application, I began to work on the API with Express, Mongoose and MongoDB. I ran into a few issues as I wanted to pass along too much information from the user when creating an event but was able to troubleshoot successfully.

Once the API was completed is when I shifted my focus onto the Client end. I successfully created the Authorization portion without any issues and then created the resource with CRUD options for the user to create events.

Once the Client was created and running without any issues is when I began my styling via CSS and `Styled-Components`. I really struggled with this portion of the project as I found it really difficult to style React Components which I know I'll need more time to learn and successfully update the styling you may see today.

### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As an unregistered user, I would like to see all events.
- As a signed in user, I would like to RSVP to an event.
- As a signed in user, I would like to create my own event.
- As a signed in user, I would like to update my own events.
- As a signed in user, I would like to delete my own events.

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- React
- Express
- Mongoose
- MongoDB

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /resources
GET | /resources/:id
POST | /resources
PATCH | /resources/:id
DELETE | /resources/:id

### Unsolved Problems

- Still need to finish the RSVP feature of the application
- Would like to eventually to revamp the styling of the entire application
- Would like to allow the user to receive messages once they RSVP
- Would like to allow guest users to be able to RSVP events that users created

## Images

#### App Screenshot:
![Screenshot](https://user-images.githubusercontent.com/88846920/158029977-78cdfc61-24fb-4434-92b8-3c93b5171414.png)


---

#### Wireframe:
[Wireframes](https://jamboard.google.com/d/1LCl1D8SGJ1om7hpweGJfnpNJjJcjSf6VNrn5t96ScOA/viewer?f=0)

---

#### ERD:
[ERD](https://jamboard.google.com/d/1LCl1D8SGJ1om7hpweGJfnpNJjJcjSf6VNrn5t96ScOA/viewer?f=2)