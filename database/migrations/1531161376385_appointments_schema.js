'use strict'

const Schema = use('Schema')

class AppointmentsSchema extends Schema {
  up () {
    this.create('appointments', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('appointments')
  }
}

module.exports = AppointmentsSchema
