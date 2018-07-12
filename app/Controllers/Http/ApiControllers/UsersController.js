'use strict'

const User = use('App/Models/User')
const UserUpdaterService = use('App/Services/UserServices/UserUpdaterService');
const UserCreatorService = use('App/Services/UserServices/UserCreatorService');

/**
 * UserController
 */
class UsersController {

  /**
   * Request a record of a user
   * @param request
   * @param auth
   * @param response
   * @returns {Promise<void>}
   */
  async show({request, auth, response}) {
      const user = await User
                            .query()
                            .with('profile')
                            .with('profile_photos')
                            .where('id', auth.user.id)
                            .firstOrFail()
      return response.json({success: true, message: '', data: user})
  }

  /**
   * Register a new user
   * @param request
   * @param response
   * @returns {Promise<*>}
   */
  async store({request, response}) {
      const userCreator = new UserCreatorService()
      let user = userCreator.create(request.all())
      if(user) {
        return response.json({success: true, message: 'Registration has been completed.', data: user})
      } else {
        return response.json({success: false, message: 'There was an error with your registration', data:[]})
      }
  }

  /**
   * Update a user record
   * @param request
   * @param response
   * @returns {Promise<*>}
   */
  async update({request, response}) {
      const userUpdater = new UserUpdaterService()
      const user = await userUpdater.update(request.params.userId, request.all())
      return response.json({success: true, message: '', data: user})
  }

  /**
   * Update a users' profile
   * @param request
   * @param response
   * @returns {Promise<*>}
   */
  async updateUserProfile({request, response}) {
      const userUpdater = new UserUpdaterService()
      const profile = await userUpdater.updateProfile(request.params.userId, request.all())
      return response.json({success: true, message: 'User profile has been updated', title: "Profile Updated", data: profile})
  }

  /**
   * Delete a user
   * @param request
   * @param response
   * @returns {Promise<void>}
   */
  async destroy({request, response}) {

  }
}

module.exports = UsersController
