'use strict'

class PublicAppController {

  showHomePage({request, auth, view}) {
    return view.render('welcome')
  }

}

module.exports = PublicAppController
