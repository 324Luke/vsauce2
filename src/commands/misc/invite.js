import { Command } from 'discord-akairo'
import { embedColor } from '../../../data/config'

class InviteCommand extends Command {
  constructor () {
    super('invite', {
      aliases: ['invite'],
      category: 'misc',
      description: '➕ Returns an invite for the bot'
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()

    embed.setTitle('➕ Invite')

    embed.setDescription('Click [here](https://discord.com/oauth2/authorize?client_id=455099726635728896&permissions=104156224&scope=bot) to add the bot to your server!')

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    return message.channel.send('', {
      embed
    })
  }
}

export default InviteCommand
