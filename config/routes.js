
var async = require('async')

module.exports = function (app, passport, auth) {


  var projects = require('../app/controllers/projects')
  app.get('/projects/update', projects.update)
  app.get('/projects', projects.list)
  app.post('/projects',projects.create)
  app.del('/projects/:projectId',projects.destroy)

  app.param('projectId', projects.project)

  // user routes
  var users = require('../app/controllers/users')
  app.get('/signin', users.signin)
  app.get('/signup', users.signup)
  app.get('/signout', users.signout)
  app.post('/users', users.create)
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: 'Invalid email or password.'}), users.session)
  app.get('/users/me', users.me)
  app.get('/users/:userId', users.show)

  

  
  // home route
  var index = require('../app/controllers/index')
  app.get('/', index.render)

}
