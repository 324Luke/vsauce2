const { Listener } = require('discord-akairo')
const logger = require('../logger')
const { commandPrefix } = require('../../data/config')
const database = require('../database')

class GuildCreateListener extends Listener {
  constructor () {
    super('guildCreate', {
      emitter: 'client',
      eventName: 'guildCreate'
    })
  }

  async exec (guild) {
    if (guild.available) {
      logger.info(`VSauce has joined ${guild.name} with ${guild.memberCount} members owned by ${guild.owner}`)

      database.create('guilds', {
        name: guild.name,
        id: guild.id,
        prefix: commandPrefix
      })
    }
  }
}

module.exports = GuildCreateListener
