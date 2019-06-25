const { Command } = require('discord-akairo')

class HelpCommand extends Command {
  constructor () {
    super('help', {
      aliases: [ 'help' ]
    })
  }

  async exec (message) {
    return message.channel.send('help command ran')
  }
}

module.exports = HelpCommand
