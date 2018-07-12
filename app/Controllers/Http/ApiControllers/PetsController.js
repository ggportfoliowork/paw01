'use strict'

const Pet = use('App/Models/Pet')

/**
 *
 */
class PetsController {
  /**
   *
   * @param request
   * @param auth
   * @param response
   */
  async index({request, auth, response}) {
    let pets = await Pet
                    .query()
                    .whereHas('user', (builder) => {
                      builder.where('users.id', auth.user.id)
                    })
                    .fetch()
    return response.json({success: true, message: null, data: pets })
  }

  /**
   *
   * @param request
   * @param response
   * @returns {Promise<void>}
   */
  async store({request, response}) {

  }

  /**
   *
   * @param request
   * @param response
   * @returns {Promise<void>}
   */
  async update({request, response}) {

  }

  /**
   *
   * @param request
   * @param response
   * @returns {Promise<void>}
   */
  async destroy({request, response}) {

  }
}

module.exports = PetsController
