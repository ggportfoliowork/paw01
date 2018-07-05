'use strict'

const Model = use('Model')

class Pet extends Model {
  static boot () {
    super.boot()
  }

  /**
   * A Pet belongs to One User
   * @returns {BelongsTo}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Pet
