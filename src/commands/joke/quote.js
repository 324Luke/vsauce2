import { Command } from 'discord-akairo'
import quotes from '../../../data/quotes.json'
import { embedColor } from '@data/config'

class QuoteCommand extends Command {
  constructor () {
    super('quote', {
      aliases: [ 'quote' ],
      category: 'joke',
      description: '💬 Returns a random VSauce quote!'
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()

    embed.setTitle('💬 Quote')

    embed.setDescription(quotes[Math.floor(Math.random() * quotes.length)])

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    return message.channel.send('', { embed })
  }
}

export default QuoteCommand
