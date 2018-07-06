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

Route
  .group(() => {
    Route.on('/').render('welcome')
    Route.get('login', 'UserController.showLoginForm')
    Route.post('login', 'UserController.login')
    Route.get('register', 'RegistrationController.showRegisterForm')
    Route.post('register', 'RegistrationController.register')
  })
  .middleware(['isNotAuthed'])

Route.get('login', 'UserController.showLoginForm')
  .middleware(['isNotAuthed'])
Route.post('login', 'UserController.login')
  .middleware(['isNotAuthed'])

Route.get('register', 'RegistrationController.showRegisterForm')
  .middleware(['isNotAuthed'])
Route.post('register', 'RegistrationController.register')
  .middleware(['isNotAuthed'])

// App SPA
Route
  .group(() => {
    Route.get('/', 'AppControllers/AppController.show')
    Route.post('logout', 'UserController.logout')
    Route.any('*', 'AppControllers/AppController.show')
  })
  .prefix('app')
  .middleware(['auth'])

// Admin SPA
Route
  .group(() => {
    Route.get('*', 'AdminControllers/AdminAppController.show')
  })
  .prefix('admin')
  .middleware(['auth'])

// API
Route
  .group(() => {

      Route.get('users/:id', 'UserController.show')
      Route.get('pets', 'PetsController.index')
  })
  .prefix('api/v1')
  .middleware(['auth'])
