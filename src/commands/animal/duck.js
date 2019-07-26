import { Command } from 'discord-akairo'
import { embedColor } from '@data/config'
import axios from 'axios'

class DuckCommand extends Command {
  constructor () {
    super('duck', {
      aliases: [ 'duck' ],
      category: 'animal',
      description: '🦆 Returns a random duck image and fact!'
    })
  }

  async exec (message) {
    axios.get('https://random-d.uk/api/v2/random')
      .then(res => {
        const embed = this.client.util.embed()

        embed.setTitle('🦆')

        embed.setImage(res.data.url)

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

export default DuckCommand
