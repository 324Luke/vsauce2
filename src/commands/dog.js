const { Command } = require('discord-akairo')
const { embedColor } = require('../../data/config')
const got = require('got')

class DogCommand extends Command {
  constructor () {
    super('dog', {
      aliases: [ 'dog', 'doggo' ]
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()
    const dogs = [ '🐶', '🐕', '🐩' ]

    const image = await got('https://random.dog/woof.json', { json: true })
    const fact = await got('https://some-random-api.ml/facts/dog', { json: true })

    embed.setTitle(dogs[Math.floor(Math.random() * dogs.length)])
    embed.setURL(image.body.url)
    embed.setDescription(fact.body.fact)

    embed.setImage(image.body.url)

    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    embed.setTimestamp(new Date())
    embed.setColor(embedColor)

    await message.channel.send(embed)
  }
}

module.exports = DogCommand
