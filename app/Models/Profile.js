'use strict'

const Model = use('Model')

class Profile extends Model {

  /**
   * Model boot
   */
  static boot () {
    super.boot()
  }

  static get dates () {
    return super.dates.concat(['date_of_birth'])
  }


  /**
   * User Relation
   */
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Profile
