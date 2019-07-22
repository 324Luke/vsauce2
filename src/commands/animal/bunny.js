import { Command } from 'discord-akairo'
import { embedColor } from '@data/config'
import axios from 'axios'

class BunnyCommand extends Command {
  constructor () {
    super('bunny', {
      aliases: [ 'bunny' ],
      category: 'animal'
    })
  }

  async exec (message) {
    axios.get('https://api.bunnies.io/v2/loop/random/?media=gif,png')
      .then(res => {
        const embed = this.client.util.embed()
        const bunnies = [ '🐰', '🐇' ]

        embed.setTitle(bunnies[Math.floor(Math.random() * bunnies.length)])

        embed.setImage(res.data.media.gif)

        embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
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

export default BunnyCommand
