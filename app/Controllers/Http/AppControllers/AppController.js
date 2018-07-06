'use strict'

const edge = require('edge.js')

class AppController {
  async show({view, auth}) {
    const user = auth.user
    let token = await auth.authenticator('jwt').generate(user)
    edge.share({token: token})
    return view.render('app.scaffold', {token: token})
  }
}

module.exports = AppController
