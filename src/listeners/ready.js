import { Listener } from 'discord-akairo'
import logger from '../logger'
import Guild from '../models/Guild'
import { postStats } from '../utils'

class ReadyListener extends Listener {
  constructor () {
    super('ready', {
      emitter: 'client',
      event: 'ready'
    })
  }

  async exec () {
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

    logger.ready('bot has started')
    logger.info(`vsauce is serving ${this.client.users.cache.size} users over ${this.client.guilds.cache.size} guilds`)

    postStats(this.client)

    for (const guild of this.client.guilds.cache) {
      Guild.find({ id: guild[1].id }).limit(1)
        .then(async doc => {
          if (doc.length === 0) {
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
        .catch(async err => {
          throw new Error(logger.error(err))
        })
    }
  }
}

export default ReadyListener
