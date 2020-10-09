import { Listener } from 'discord-akairo'
import logger from '../logger'
import { postStats } from '../utils'

class GuildDeleteListener extends Listener {
  constructor () {
    super('guildDelete', {
      emitter: 'client',
      event: 'guildDelete'
    })
  }

  async exec (guild) {
    if (guild.available) {
      this.client.user.setPresence({
        activity: {
          name: `over ${this.client.users.cache.size} in ${this.client.guilds.cache.size} | ;help`,
          type: 'WATCHING'
        },
        status: 'idle'
      })
        .catch(err => {
          throw new Error(logger.error(err))
        })

      postStats(this.client)

      logger.info(`VSauce has left ${guild.name} with ${guild.memberCount} members owned by ${guild.owner}`)
      logger.info(`vsauce is now serving ${this.client.users.size} users over ${this.client.guilds.size} guilds`)
    }
  }
}

export default GuildDeleteListener
