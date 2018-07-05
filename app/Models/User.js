'use strict'

const Hash = use('Hash')
const Model = use('Model')

class User extends Model {

  /**
   * Model boot
   */
  static boot () {

    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * User Tokens
   * @returns {HasMany}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  /**
   * User Pets
   * @returns {HasMany}
   */
  pets () {
    return this.hasMany('App/Models/Pet')
  }

  profile() {
    return this.hasOne('App/Models/Profile')
  }

}

module.exports = User
