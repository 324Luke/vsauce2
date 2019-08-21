import { Listener } from 'discord-akairo'
import logger from '@src/logger'
import { presence } from '@data/config'
import { postStats } from '@src/utils'

class GuildDeleteListener extends Listener {
  constructor () {
    super('guildDelete', {
      emitter: 'client',
      eventName: 'guildDelete'
    })
  }

  async exec (guild) {
    if (guild.available) {
      this.client.user.setPresence({ game: { name: presence.name(this.client), type: presence.type }, status: presence.status })
        .catch(console.error)

      postStats(this.client)

      logger.info(`VSauce has left ${guild.name} with ${guild.memberCount} members owned by ${guild.owner}`)
      logger.info(`vsauce is now serving ${this.client.users.size} users over ${this.client.guilds.size} guilds`)
    }
  }
}

export default GuildDeleteListener
