const { Command } = require('discord-akairo')
const quotes = require('../../../data/quotes.json')
const { embedColor } = require('@data/config')

class QuoteCommand extends Command {
  constructor () {
    super('quote', {
      aliases: [ 'quote' ],
      category: 'joke'
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()

    embed.setTitle('Quote')

    embed.setDescription(quotes[Math.floor(Math.random() * quotes.length)])

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    return message.channel.send('', { embed })
  }
}

module.exports = QuoteCommand
