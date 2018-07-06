'use strict'

/**
 * LoginController
 */
class LoginController {

  async login ({ request, auth, view, response}) {

    const { email, password } = request.all()

    try {
      await auth.attempt(email, password)
      response.redirect('app')
    } catch(e) {
      return view.render('auth.login', {error: "Your username/password was incorrect."})
    }
  }

  showLoginForm({view}) {
    return view.render('auth.login')
  }

  async logout({view, auth, response}) {
    await auth.logout()
    return response.redirect('/')
  }

}

module.exports = LoginController
