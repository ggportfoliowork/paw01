'use strict'

class AppController {
  show({view}) {
    return view.render('app.scaffold')
  }
}

module.exports = AppController
