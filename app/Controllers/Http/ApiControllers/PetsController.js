'use strict'

class PetsController {
  index({request, auth, response}) {

      response.json([{"name": "Sassy", "breeds": "52", "species": "1", "weight": "14"}])
  }

  store({request, response}) {

  }

  update({request, response}) {

  }

  destroy({request, response}) {

  }
}

module.exports = PetsController
