const { Command } = require('discord-akairo')

class PingCommand extends Command {
  constructor () {
    super('ping', {
      aliases: [ 'ping' ]
    })
  }

  async exec (message) {
    return message.channel.send('ping command ran')
  }
}

module.exports = PingCommand
