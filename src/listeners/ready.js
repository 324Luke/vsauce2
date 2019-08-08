import { Listener } from 'discord-akairo'
import logger from '@src/logger'
import Guild from '../models/Guild'
import { presence } from '@data/config'
import { postStats } from '@src/Utils'

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

    postStats(this.client)

    for (const guild of this.client.guilds) {
      Guild.findOne({ id: 528810369607663621 })
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

export default ReadyListener
