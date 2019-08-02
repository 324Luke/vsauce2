import { Listener } from 'discord-akairo'
import logger from '@src/Logger'
import Guild from '../models/Guild'
import { presence } from '@data/config'

class ReadyListener extends Listener {
  constructor () {
    super('ready', {
      emitter: 'client',
      eventName: 'ready'
    })
  }

  async exec () {
    this.client.user.setPresence({ game: { name: presence.name(this.client), type: presence.type }, status: presence.status })
      .catch(console.error)

    logger.ready('bot has started')
    logger.info(`vsauce is serving ${this.client.users.size} users over ${this.client.guilds.size} guilds`)

    // TODO: ADD stats posting

    for (const guild of this.client.guilds) {
      if (!Guild.findOne({ id: guild.id })) {
        const guildToSave = new Guild({
          name: guild.name,
          id: guild.id
        })

        try {
          logger.info(`inserted guild ${guild.name} with id ${guild.id}`)
          await guildToSave.save()
        } catch (err) {
          throw new Error(logger.error(err))
        }
      }
    }
  }
}

export default ReadyListener
