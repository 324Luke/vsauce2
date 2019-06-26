const { Listener } = require('discord-akairo')
const logger = require('../logger')

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
    }
  }
}

module.exports = GuildCreateListener
