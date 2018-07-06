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
    Route.get('/', 'PublicAppController@showHomePage')
    Route.get('login', 'AuthControllers/LoginController.showLoginForm')
    Route.post('login', 'AuthControllers/LoginController.login')
    Route.get('register', 'AuthControllers/RegistrationController.showRegisterForm')
    Route.post('register', 'AuthControllers/RegistrationController.register')
  })
  .middleware(['isNotAuthed'])

// App SPA
Route
  .group(() => {
    Route.get('/', 'AppControllers/AppController.show')
    Route.post('logout', 'AuthControllers/LoginController.logout')
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
      Route.get('pets', 'ApiControllers/PetsController.index')
      Route.post('pets', 'ApiControllers/PetsController.store')
      Route.put('pets/:petId', 'ApiControllers/PetsController.update')
      Route.delete('pets/:petId', 'ApiControllers/PetsController.destroy')
  })
  .prefix('api/v1')
  .middleware(['auth:jwt'])
