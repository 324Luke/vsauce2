const { Command } = require('discord-akairo')
const { embedColor } = require('../../../data/config')
const axios = require('axios')

class DuckCommand extends Command {
  constructor () {
    super('duck', {
      aliases: [ 'duck' ],
      category: 'animal'
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

        embed.setDescription(`A error has occured while executing this command, If this error contiues please join our [support server](https://discord.gg/9fvBYnM) \n \`\`\` ${err} \`\`\``)

        embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
        embed.setTimestamp(new Date())
        embed.setColor(embedColor)

        message.channel.send(embed)
      })
  }
}

module.exports = DuckCommand
