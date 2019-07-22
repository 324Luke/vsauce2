import { Command } from 'discord-akairo'
import { embedColor } from '@data/config'
import axios from 'axios'

class CatCommand extends Command {
  constructor () {
    super('cat', {
      aliases: [ 'cat', 'kitty' ],
      category: 'animal'
    })
  }

  async exec (message) {
    axios.get('http://aws.random.cat/meow')
      .then(res => {
        const embed = this.client.util.embed()
        const cats = [ '🐱', '🐈', '😸' ]

        embed.setTitle(cats[Math.floor(Math.random() * cats.length)])

        embed.setImage(res.data.file)

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

export default CatCommand
