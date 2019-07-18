import { Command } from 'discord-akairo'
import { embedColor } from '@data/config'
import images from '@data/images/reverse'

class NoUCommand extends Command {
  constructor () {
    super('nou', {
      aliases: [ 'nou', 'reverse' ],
      category: 'joke'
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()

    embed.setImage(images[Math.floor(Math.random() * images.length)])

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    return message.channel.send({ embed })
  }
}

export default NoUCommand
