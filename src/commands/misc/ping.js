import { Command } from 'discord-akairo'
import { embedColor } from '../../../data/config'

class PingCommand extends Command {
  constructor () {
    super('ping', {
      aliases: ['ping'],
      category: 'misc',
      description: '🏓 Gets the bots current ping to discord'
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()

    embed.setTitle('🏓 **Pinging...**')

    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    embed.setTimestamp(new Date())
    embed.setColor(embedColor)
    return message.channel.send(embed).then(m => {
      embed.setTitle('**:ping_pong: Pong!**')
      embed.addField('Current Message Latency<:blank:588039534063779841>', `\`${m.createdTimestamp - message.createdTimestamp}ms\``, true)
      embed.addField('Current API Latency', `\`${Math.round(this.client.ping)}ms\``, true)
      m.edit(embed)
    })
  }
}

export default PingCommand
