import { Command } from 'discord-akairo'

class DatabaseRunCommand extends Command {
  constructor () {
    super('dbrun', {
      aliases: [ 'db', 'database', 'runondb', 'dbrun' ],
      category: 'owner',
      ownerOnly: true,
      args: [
        {
          id: 'func',
          type: 'string'
        },
        {
          id: 'collection',
          type: 'string'
        },
        {
          id: 'statement',
          type: 'string'
        }
      ]
    })
  }

  async exec (message, { func, collection, statement }) {
    message.channel.send('Not finished.')
  }
}

export default DatabaseRunCommand
