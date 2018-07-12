'use strict'

const Pet = use('App/Models/Pet')
const PetCreatorService = use('App/Services/PetServices/PetCreatorService')

/**
 * PetsController
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
  async store({request, auth, response}) {
    request.user_id = auth.user.id
    const petCreatorService = new PetCreatorService()
    const pet = await petCreatorService.create(request.all())
    if(pet) {
      return response.json({success: true, data: pet, message: 'Your pet has been added', title: 'Success'})
    } else {
      return response.json({success: false, data: [], message: 'There was an error adding your pet', title: 'Error'})
    }
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
