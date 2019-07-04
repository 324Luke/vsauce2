import { Listener } from 'discord-akairo'
import logger from '@src/Logger'
import { commandPrefix } from '@data/config'
import database from '@src/database'

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
      logger.info(`vsauce is now serving ${this.client.users.size} users over ${this.client.guilds.size} guilds`)

      // Create new guild object in database
      database.create('guilds', {
        name: guild.name,
        id: guild.id,
        prefix: commandPrefix
      })
    }
  }
}

export default GuildCreateListener
