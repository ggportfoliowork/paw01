'use strict'

/**
 * Is Authenticated middleware
 */
class IsAuthenticated {
  async handle ({ auth, view, request, response}, next) {
    try {
      await auth.check()
      return response.redirect('app')
    } catch (e) {
      console.log("ERROR " , e)
    }
    await next()
  }
}

module.exports = IsAuthenticated
