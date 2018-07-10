'use strict'

const Schema = use('Schema')

class TracksSchema extends Schema {
  up () {
    this.create('tracks', (table) => {
      table.increments()
      table.integer('pet_id').unsigned().references('id').inTable('pets')
      table.date('date_start').notNullable()
      table.date('date_end').notNullable()
      table.string('track_hash', 128).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tracks')
  }
}

module.exports = TracksSchema
