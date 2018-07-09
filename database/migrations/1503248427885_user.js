'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.boolean('has_viewed_joyride').notNullable().defaultsTo(0)
      table.boolean('notifications_email').notNullable().defaultsTo(1)
      table.boolean('notifications_sms').notNullable().defaultsTo(1)
      table.boolean('account_is_active').notNullable().defaultsTo(1)
      table.string('email', 128).notNullable().unique()
      table.string('token', 255).nullable()
      table.string('login_source', 128).nullable()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
