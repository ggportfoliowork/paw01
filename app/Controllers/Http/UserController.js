'use strict'

/**
 * User Controller
 */
class UserController {

  async login ({ request, auth, view }) {

    const { email, password } = request.all()

    try {
      await auth
            .attempt(email, password)
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
