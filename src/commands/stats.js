const { Command } = require('discord-akairo')

class StatsCommand extends Command {
  constructor () {
    super('stats', {
      aliases: [ 'stats' ]
    })
  }

  async exec (message) {
    return message.channel.send('stats command ran')
  }
}

module.exports = StatsCommand
