'use strict'

const Schema = use('Schema')

class BreedsSchema extends Schema {
  up () {
    this.create('breeds', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('breeds')
  }
}

module.exports = BreedsSchema
