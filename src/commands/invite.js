const { Command } = require('discord-akairo')
const { embedColor } = require('../../data/config')

class InviteCommand extends Command {
  constructor () {
    super('invite', {
      aliases: [ 'invite' ]
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()

    embed.setTitle('➕ Invite')

    embed.setDescription('Click [here](https://discordapp.com/api/oauth2/authorize?client_id=532710471367655425&permissions=104156224&scope=bot) to add the bot to your server!')

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    return message.channel.send('', {
      embed
    })
  }
}

module.exports = InviteCommand
