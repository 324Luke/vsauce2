import { Listener } from 'discord-akairo'
import logger from '@src/logger'
import { presence } from '@data/config'
import Guild from '@src/models/Guild'
import { postStats } from '@src/utils'

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

      postStats(this.client)

      // Create new guild object in database

      for (const guild of this.client.guilds) {
        Guild.findOne({ id: guild.id })
          .then(async (doc) => {
            if (doc === null) {
              const guildToSave = new Guild({
                name: guild[1].name,
                id: guild[1].id
              })

              try {
                logger.info(`inserted guild ${guild[1].name} with id ${guild[1].id}`)
                await guildToSave.save()
              } catch (err) {
                throw new Error(logger.error(err))
              }
            }
          })
          .catch((err) => {
            throw new Error(logger.error(err))
          })
      }
    }
  }
}

export default GuildCreateListener
