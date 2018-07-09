'use strict'

const UserUpdater = use('App/Services/UserServices/UserUpdater');

/**
 *
 */
class UsersController {
  async index({request, auth, response}) {


  }

  async store({request, response}) {

  }

  /**
   * Update a user
   */
  async update({request, response}) {
      const userUpdater = new UserUpdater()
      const user = await userUpdater.update(request.params.userId, request.all())
      return response.json({success: true, message: 'User has been updated.', data: user})
  }

  async updateUserProfile({request, response}) {
      const userUpdater = new UserUpdater()
      const profile = await userUpdater.updateProfile(request.params.userId, request.all())
      return response.json({success: true, message: 'User profile has been updated', data: profile})
  }

  async destroy({request, response}) {

  }
}

module.exports = UsersController
