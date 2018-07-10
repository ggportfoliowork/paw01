'use strict'

const Schema = use('Schema')

class ImagesSchema extends Schema {
  up () {
    this.create('pet_photos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('file_name').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pet_photos')
  }
}

module.exports = ImagesSchema
