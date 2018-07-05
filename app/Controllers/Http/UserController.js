'use strict'

/**
 * User Controller
 */
class UserController {

  async login ({ request, auth, view }) {
    const { email, password, remember } = request.all()

    console.log(email, password)

    try {
      return request.auth.attempt(email, password).remember(remember)
    } catch (e) {
      return view.render('auth.login', {error: "Invalid username/password"})
    }

  }

  showLoginForm({view}) {
    return view.render('auth.login')
  }

  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }

}

module.exports = UserController
