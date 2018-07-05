'use strict'

/**
 * User Controller
 */
class UserController {

  async login ({ request, auth }) {
    const { username, password } = request.all()
    await auth.attempt(username, password)
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
