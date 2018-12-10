'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAddressSchema extends Schema {
  up () {
    this.create('user_addresses', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('SET NULL')
      table.string('street').notNullable()
      table.integer('number').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('district')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_addresses')
  }
}

module.exports = UserAddressSchema
