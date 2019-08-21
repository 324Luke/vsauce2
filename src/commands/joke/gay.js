import { Command } from 'discord-akairo'
import { embedColor } from '@data/config'
import { getRandomInt } from '@src/utils.js'

class GayCommand extends Command {
  constructor () {
    super('gay', {
      aliases: [ 'gay', 'howgay' ],
      category: 'joke',
      description: '🌈 Returns a ~~100% accurate~~ value of how gay a given person is.',
      args: [
        {
          id: 'member',
          type: 'member'
        }
      ]
    })
  }

  async exec (message, { member }) {
    const { user } = member
    const embed = this.client.util.embed()

    embed.setTitle('🌈')

    if (user) {
      embed.setDescription(`<@${user.id}>, is ${getRandomInt(0, 100)}% gay.`)
    } else {
      embed.setDescription(`<@${message.author.id}>, you are ${getRandomInt(0, 100)}% gay.`)
    }

    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    embed.setTimestamp(new Date())
    embed.setColor(embedColor)

    message.channel.send(embed)
  }
}

export default GayCommand
