'use strict'

/**
 * User Controller
 */
class UserController {

  async login ({ request, auth, view, response}) {

    const { email, password } = request.all()
    const authAttempt = await auth.attempt(email, password)

    if(authAttempt) {
      response.redirect('app')
    } else {
      return view.render('auth.login', {error: "Your username/password was incorrect."})
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

  async logout({view, auth, response}) {
    await auth.logout()
    return response.redirect('/')
  }

}

module.exports = UserController
