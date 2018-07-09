'use strict'
const User = use('App/Models/User')

class UserUpdater {

  /**
   * Update a user record
   * @param id
   * @param data
   * @returns {Promise<*>}
   */
  async update(id, data) {
    let user = await User.find(id)
    if(user) {
      user.merge(data)
      await user.save()
      return user
    } else {
      return false
    }
  }

  /**
   * Update a user profile
   * @param id
   * @param data
   * @returns {Promise<*>}
   */
  async updateProfile(id, data) {
    const user = await User.find(id)
    const userProfile = await user.profile().fetch()
    if(userProfile) {
      userProfile.merge(data)
      await userProfile.save()
      return userProfile
    } else {
      return false
    }
  }

}

module.exports = UserUpdater
