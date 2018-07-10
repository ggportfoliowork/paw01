'use strict'

const Schema = use('Schema')

class PhotoSchema extends Schema {
  up () {
    this.create('profile_photos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('file_name').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profile_photos')
  }
}

module.exports = PhotoSchema
