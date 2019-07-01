const { Listener } = require('discord-akairo')
const logger = require('../logger')

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
  }
}

module.exports = ReadyListener
