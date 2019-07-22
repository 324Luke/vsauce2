import { Command } from 'discord-akairo'
import deaths from '@data/deaths'
import { embedColor } from '@data/config'

class KillCommand extends Command {
  constructor () {
    super('kill', {
      aliases: [ 'kill', 'murder' ],
      category: 'joke',
      args: [
        {
          id: 'victim',
          type: 'member'
        }
      ]
    })
  }

  async exec (message, { victim }) {
    const embed = this.client.util.embed()

    embed.setTitle('🔪 Kill')

    embed.setDescription(deaths[Math.floor(Math.random() * deaths.length)](message.author, victim))

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    return message.channel.send({ embed })
  }
}

export default KillCommand
