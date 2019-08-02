import { Listener } from 'discord-akairo'
import logger from '@src/Logger'
import { presence } from '@data/config'
import Guild from '@src/models/Guild'

class GuildCreateListener extends Listener {
  constructor () {
    super('guildCreate', {
      emitter: 'client',
      eventName: 'guildCreate'
    })
  }

  async exec (guild) {
    if (guild.available) {
      this.client.user.setPresence({ game: { name: presence.name(this.client), type: presence.type }, status: presence.status })
        .catch(console.error)

      logger.info(`VSauce has joined ${guild.name} with ${guild.memberCount} members owned by ${guild.owner}`)
      logger.info(`vsauce is now serving ${this.client.users.size} users over ${this.client.guilds.size} guilds`)

      // Create new guild object in database

      if (!await Guild.findOne({ id: guild.id })) {
        const guildToSave = new Guild({
          name: guild.name,
          id: guild.id
        })

        try {
          await guildToSave.save()
        } catch (err) {
          throw new Error(logger.error(err))
        }
      }
    }
  }
}

export default GuildCreateListener
