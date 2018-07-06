'use strict'

const Env = use('Env')
class IsAuthenticated {
  async handle ({ auth, view, request, response}, next) {

    /**
     * Verify if we are logged in.
     *
     * ref: http://adonisjs.com/docs/4.0/authentication#_check
     */
    try {
      await auth.check()
      return response.redirect('app')
    } catch (e) {

    }

    await next()

  }
}

module.exports = IsAuthenticated
