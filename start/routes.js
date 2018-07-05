'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('login', 'UserController.showLoginForm')
Route.post('login', 'UserController.login')

Route.get('register', 'RegistrationController.showRegisterForm')
Route.post('register', 'RegistrationController.register')

Route
  .group(() => {
      Route.get('users/:id', 'UserController.show')
      Route.get('pets', 'PetsController.index')
  })
  .prefix('api/v1')
  .middleware(['auth'])
