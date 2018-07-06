'use strict'

class PublicAppController {

  showHomePage({request, auth, view, response}) {
    return view.render('welcome')
  }

}

module.exports = PublicAppController
