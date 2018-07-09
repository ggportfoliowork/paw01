'use strict'

const Model = use('Model')

class Profile extends Model {

  /**
   * Model boot
   */
  static boot () {
    super.boot()
  }

  /**
   * User Relation
   */
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Profile
