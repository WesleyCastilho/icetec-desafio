'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidateSchema extends Schema {
  up () {
    this.create('candidates', (table) => {
      table.increments()
      table.string('nome')
      table.string('email')
      table.string('birthday')
      table.string('linkedin')
      table.string('skills')
      table.timestamps()
    })
  }

  down () {
    this.drop('candidates')
  }
}

module.exports = CandidateSchema
