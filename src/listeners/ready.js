import { Listener } from 'discord-akairo'
import logger from '@src/Logger'

class ReadyListener extends Listener {
  constructor () {
    super('ready', {
      emitter: 'client',
      eventName: 'ready'
    })
  }

  async exec () {
    logger.ready('bot has started')
    logger.info(`vsauce is serving ${this.client.users.size} users over ${this.client.guilds.size} guilds`)

    // TODO: Sync database on ready event with active guilds
  }
}

export default ReadyListener
