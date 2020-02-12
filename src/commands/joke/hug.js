import { Command } from 'discord-akairo'
import { embedColor } from '../../../data/config'
import axios from 'axios'

class HugCommand extends Command {
  constructor () {
    super('hug', {
      aliases: [ 'hug' ],
      category: 'joke',
      args: [
        {
          id: 'hugging',
          type: 'member'
        }
      ]
    })
  }

  async exec (message, { hugging }) {
    axios.get('https://some-random-api.ml/animu/hug')
      .then(res => {
        const embed = this.client.util.embed()
        embed.setTitle('🤗 Hug')

        if (hugging) {
          embed.setDescription(`${message.author} hugs ${hugging}`)
        }
        embed.setImage(res.data.link)

        embed.setColor(embedColor)
        embed.setTimestamp(new Date())
        embed.setFooter(`Powered by some-random-api.ml | Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

        return message.channel.send({ embed })
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

export default HugCommand
