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
      table.date('date_of_birth').nullable()
      table.string('description').nullable()
      table.boolean('behavior_animals').notNullable()
      table.boolean('behavior_humans').notNullable()
      table.boolean('behavior_children').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pets')
  }
}

module.exports = PetSchema
