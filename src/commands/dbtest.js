const { Command } = require('discord-akairo')
const database = require('../database')
const logger = require('../logger')

class TestCommand extends Command {
  constructor () {
    super('dbtest', {
      aliases: [ 'dbtest' ]
    })
  }

  async exec (message) {
    database.create('users', {
      id: message.author.id,
      username: message.author.username
    })
    database.read('users', message.author.id)
      .then(item => message.reply(item))
      .catch(err => { throw new Error(logger.error(err)) })
  }
}

module.exports = TestCommand
