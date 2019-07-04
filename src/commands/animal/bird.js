const { Command } = require('discord-akairo')
const { embedColor } = require('@data/config')
const axios = require('axios')

class BirdCommand extends Command {
  constructor () {
    super('bird', {
      aliases: [ 'bird', 'birb' ],
      category: 'animal'
    })
  }

  async exec (message) {
    axios.get('https://some-random-api.ml/img/birb')
      .then(res => {
        const embed = this.client.util.embed()
        const birds = [ '🕊', '🐦', '🐓', '🐤', '🐣', '🐥', '🐔', '🦃', '🦅', '🦉', '🦜', '🦚' ]

        embed.setTitle(birds[Math.floor(Math.random() * birds.length)])

        embed.setImage(res.data.link)

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

module.exports = BirdCommand
