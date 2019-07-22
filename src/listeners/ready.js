import { Listener } from 'discord-akairo'
import logger from '@src/Logger'
import database from '@src/Database'
import { commandPrefix, presence } from '@data/config'

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

    // FIXME: Doesn't add guilds
    // also probably needs a refactor for quickness
    this.client.guilds.forEach(guild => {
      if (guild.available) {
        if (!database.read('guilds', { id: guild.id })) {
          database.create('guilds', {
            name: guild.name,
            id: guild.id,
            prefix: commandPrefix
          })
          logger.info(`inserted guild ${guild.name} with id ${guild.id}`)
        }
      }
    })
  }
}

export default ReadyListener
