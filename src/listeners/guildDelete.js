import { Listener } from 'discord-akairo'
import logger from '@src/Logger'

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
      logger.info(`vsauce is now serving ${this.client.users.size} users over ${this.client.guilds.size} guilds`)
    }
  }
}

export default GuildDeleteListener