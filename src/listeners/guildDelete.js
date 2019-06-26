const { Listener } = require('discord-akairo')
const logger = require('../logger')

class GuildDeleteListener extends Listener {
  constructor () {
    super('guildDelete', {
      emitter: 'client',
      eventName: 'guildDelete'
    })
  }

  async exec (guild) {
    if (guild.available) {
      logger.info(`VSauce has left ${guild.name} with ${guild.memberCount} members owned by ${guild.owner}`)
    }
  }
}

module.exports = GuildDeleteListener
