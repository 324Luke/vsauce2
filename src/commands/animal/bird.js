import { Command } from 'discord-akairo'
import { embedColor } from '../../../data/config'
import axios from 'axios'

class BirdCommand extends Command {
  constructor () {
    super('bird', {
      aliases: [ 'bird', 'birb' ],
      category: 'animal',
      description: '🕊 Returns a random bird image and fact!'
    })
  }

  async exec (message) {
    axios.get('https://some-random-api.ml/img/birb')
      .then(res => {
        const embed = this.client.util.embed()
        const birds = [ '🕊', '🐦', '🐓', '🐤', '🐣', '🐥', '🐔', '🦃', '🦅', '🦉', '🦜', '🦚' ]

        embed.setTitle(birds[Math.floor(Math.random() * birds.length)])

        embed.setImage(res.data.link)

        embed.setFooter(`Powered by some-random-api.ml | Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
        embed.setTimestamp(new Date())
        embed.setColor(embedColor)

        message.channel.send(embed)
      })
      .catch(err => {
        const embed = this.client.util.embed()

        embed.setTitle('🐛 Error')
        embed.setDescription(`A error has occured while executing this command, If this error contiues please join our [support server](https://discord.gg/9fvBYnM) \n \`\`\` ${err} \`\`\``)

        embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
        embed.setTimestamp(new Date())
        embed.setColor(embedColor)

        message.channel.send(embed)
      })
  }
}

export default BirdCommand
