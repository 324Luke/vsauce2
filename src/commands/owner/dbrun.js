import { Command } from 'discord-akairo'
import database from '../../Database'

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
    switch (func) {
      case 'read':
        const db = database.connect()

        db.collection(collection)
    }
  }
}

export default DatabaseRunCommand
