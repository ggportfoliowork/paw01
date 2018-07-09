'use strict'

/**
 * LoginController
 */
class LoginController {

  /**
   * Login a local user
   * @param request
   * @param auth
   * @param view
   * @param response
   * @returns {Promise<*>}
   */
  async login ({ request, auth, view, response}) {

    const { email, password } = request.all()

    try {
      await auth.attempt(email, password)
      response.redirect('app')
    } catch(e) {
      return view.render('auth.login', {error: "Your username/password was incorrect."})
    }
  }

  /**
   * Display the login form
   * @param view
   * @returns {*}
   */
  showLoginForm({view}) {
    return view.render('auth.login')
  }

  /**
   * Logout
   * @param view
   * @param auth
   * @param response
   * @returns {Promise<*>}
   */
  async logout({view, auth, response}) {
    await auth.logout()
    return response.redirect('/')
  }

  /**
   * FB Social Redirect
   * @param ally
   * @returns {Promise<void>}
   */
  async redirect({ally}) {
    await ally.driver('facebook').redirect()
  }

  /**
   * Create a Facebook user
   * @param ally
   * @param auth
   * @returns {Promise<string>}
   */
  async callback({ally, auth}) {
    try {
      const fbUser = await ally
                              .driver('facebook')
                              .fields(['username', 'email', 'profile_pic'])
                              .getUser()
      const userDetails = {
        email: fbUser.getEmail(),
        username: fbUser.getUsername(),
        has_viewed_joyride: 0,
        notifications_email: 1,
        notifications_sms: 1,
        token: fbUser.getAccessToken(),
        login_source: 'facebook'
      }

      const whereClause = {
        email: fbUser.getEmail()
      }

      const user = await User.findOrCreate(whereClause, userDetails)
      await auth.login(user)
      return redirect('/app')
    } catch (error) {
      return view.render('auth.register', error)
    }
  }

}

module.exports = LoginController
