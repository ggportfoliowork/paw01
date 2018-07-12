'use strict'

const Schema = use('Schema')

class PetSchema extends Schema {
  up () {
    this.create('pets', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name').notNullable()
      table.integer('species_id').unsigned().defaultsTo(1)
      table.json('breeds').nullable()
      table.string('gender').notNullable().defaultsTo('m')
      table.date('date_of_birth').nullable()
      table.boolean('is_spayed_neutered').defaultsTo(0)
      table.boolean('is_microchipped').defaultsTo(0)
      table.boolean('is_house_trained').defaultsTo(0)
      table.boolean('behavior_animals').notNullable().defaultsTo(0)
      table.boolean('behavior_humans').notNullable().defaultsTo(0)
      table.boolean('behavior_children').notNullable().defaultsTo(0)
      table.string('details_care').nullable()
      table.string('details_description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pets')
  }
}

module.exports = PetSchema
