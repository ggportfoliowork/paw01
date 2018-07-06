'use strict'

class IsAuthenticated {
  async handle ({ auth, view, request, response}, next) {
    try {
      await auth.check()
      return response.redirect('app')
    } catch (e) {

    }
    await next()
  }
}

module.exports = IsAuthenticated
