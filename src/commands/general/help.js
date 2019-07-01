const { Command } = require('discord-akairo')
const { embedColor, commandPrefix } = require('../../../data/config')

class HelpCommand extends Command {
  constructor () {
    super('help', {
      aliases: [ 'help' ],
      category: 'misc'
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()

    embed.setTitle('📒 VSauce Bot Help')
    embed.setDescription('Need more help than I can provide? Join our [support server](https://discord.gg/9fvBYnM)!')

    /*
     * Basic Commands
     */
    embed.addField(`\`${commandPrefix}help\``, 'Shows a list of all commands available to this server')
    embed.addField(`\`${commandPrefix}ping\``, 'Gets the bots current ping to discord')
    embed.addField(`\`${commandPrefix}stats, ${commandPrefix}info, ${commandPrefix}statistics\``, 'Returns basic statistics on the bot.')
    embed.addField(`\`${commandPrefix}invite\``, 'Returns an invite for the bot')
    /*
     * Animal Commands
     */
    embed.addField(`\`${commandPrefix}dog, ${commandPrefix}doggo\``, '🐶 Returns a random dog image and fact!')
    embed.addField(`\`${commandPrefix}bird, ${commandPrefix}birb\``, '🕊 Returns a random bird image and fact!')
    embed.addField(`\`${commandPrefix}cat, ${commandPrefix}kitty\``, '🐱 Returns a random cat image and fact!')
    embed.addField(`\`${commandPrefix}bunny\``, '🐰 Returns a random bunny image and fact!')
    embed.addField(`\`${commandPrefix}duck\``, '🦆 Returns a random duck image and fact!')
    /*
     * Joke Commands
     */
    embed.addField(`\`${commandPrefix}insult\``, 'Insults anyone of your choosing!')
    embed.addField(`\`${commandPrefix}gay\``, 'Returns a ~~100% accurate~~ value of how gay a given person is.')
    embed.addField(`\`${commandPrefix}reverse, ${commandPrefix}nou\``, '🔃')
    /*
     * Reddit Commands
     */

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    return message.channel.send('', { embed })
  }
}

module.exports = HelpCommand
