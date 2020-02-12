import { Command } from 'discord-akairo'
import axios from 'axios'
import { embedColor } from '../../../data/config'

class InsultCommand extends Command {
  constructor () {
    super('insult', {
      aliases: [ 'insult' ],
      category: 'joke',
      description: '😡 Insults anyone of your choosing!',
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
    axios.get('https://insult.mattbas.org/api/insult')
      .then(res => {
        const embed = this.client.util.embed()

        embed.setTitle('😡')

        if (user) {
          embed.setDescription(`<@${user.id}>, ${JSON.stringify(res.data).split('"')[1]}`)
        } else {
          embed.setDescription(`<@${message.author.id}>, ${JSON.stringify(res.data).split('"')[1]}`)
        }

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

export default InsultCommand
