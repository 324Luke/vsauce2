const { Command } = require('discord-akairo')

class HelpCommand extends Command {
  constructor () {
    super('help', {
      aliases: [ 'help' ]
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()

    embed.setTitle('test')

    return message.channel.send('', {
      embed
    })
  }
}

module.exports = HelpCommand
