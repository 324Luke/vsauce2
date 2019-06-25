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
  }
}

module.exports = ReadyListener
