'use strict'

class PublicAppController {

  showHomePage({request, view}) {
    return view.render('welcome')
  }
}

module.exports = PublicAppController
