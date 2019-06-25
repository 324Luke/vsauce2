const { Command } = require('discord-akairo')

class InviteCommand extends Command {
  constructor () {
    super('invite', {
      aliases: [ 'invite' ]
    })
  }

  async exec (message) {
    return message.channel.send('invite command ran')
  }
}

module.exports = InviteCommand
