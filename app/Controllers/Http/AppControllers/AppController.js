'use strict'

const edge = require('edge.js')

class AppController {
  async show({request, view, auth}) {
    let userProfile = await auth.user.profile().fetch()
    let token = await auth.authenticator('jwt').generate(auth.user)
    return view.render('app.scaffold', {token: token, userProfile: userProfile})
  }
}

module.exports = AppController
