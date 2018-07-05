'use strict'

const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name_first').nullable()
      table.string('name_last').nullable()
      table.integer('contact_phone_type').nullable()
      table.string('contact_phone_value').nullable()
      table.string('address_street_1').nullable()
      table.string('address_street_2').nullable()
      table.string('address_city').nullable()
      table.integer('address_state').unsigned().nullable()
      table.string('address_postal_code').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
