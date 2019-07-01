const { Command } = require('discord-akairo')
const { embedColor } = require('../../../data/config')
const got = require('got')

class CatCommand extends Command {
  constructor () {
    super('cat', {
      aliases: [ 'cat', 'kitty' ],
      category: 'animal'
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()
    const cats = [ '🐱', '🐈', '😸' ]

    const image = await got('http://aws.random.cat/meow', { json: true })
    const fact = await got('https://some-random-api.ml/facts/cat', { json: true })

    embed.setTitle(cats[Math.floor(Math.random() * cats.length)])
    embed.setURL(image.body.file)
    embed.setDescription(fact.body.fact)

    embed.setImage(image.body.file)

    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    embed.setTimestamp(new Date())
    embed.setColor(embedColor)

    await message.channel.send(embed)
  }
}

module.exports = CatCommand
