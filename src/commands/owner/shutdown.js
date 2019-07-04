import { Command } from 'discord-akairo'
import { embedColor } from '@data/config'

class ShutdownCommand extends Command {
  constructor () {
    super('shutdown', {
      aliases: [ 'shutdown', 'quit', 'restart' ],
      category: 'owner',
      ownerOnly: true
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()

    embed.setTitle('🔌 Shutting down ...')

    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    embed.setTimestamp(new Date())
    embed.setColor(embedColor)

    message.channel.send(embed)

    setTimeout(() => process.exit(), 3000)
  }
}

export default ShutdownCommand
