'use strict'

const Hash = use('Hash')
const Model = use('Model')
const Profile = use('App/Models/Profile')

class User extends Model {

  /**
   * Hidden Fields
   * @returns {string[]}
   */
  static get hidden () {
    return ['password']
  }

  /**
   * Model boot
   */
  static boot () {

    super.boot()

    /**
     * Hash user password prior to saving
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })

    /**
     * Create an empty profile for a user after registration
     */
    this.addHook('afterCreate', async (userInstance) => {
        try {
          await Profile.create({
            'user_id': userInstance.id,
            'name_first': null,
            'name_last': null,
            'contact_phone_type': null,
            'contact_phone_value': null,
            'address_street_1': null,
            'address_street_2': null,
            'address_state': null,
            'address_city': null,
            'address_postal_code': null
          })
        } catch(e) {
          console.error("ERROR ", e)
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

  /**
   * User Profile
   * @returns {HasOne}
   */
  profile() {
    return this.hasOne('App/Models/Profile')
  }

}

module.exports = User
