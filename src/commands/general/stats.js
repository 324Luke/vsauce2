import { Command } from 'discord-akairo'
import { embedColor, version } from '@data/config'

class StatsCommand extends Command {
  constructor () {
    super('stats', {
      aliases: [ 'stats', 'info', 'statistics' ],
      category: 'misc'
    })
  }

  async exec (message) {
    let totalSeconds = (this.client.uptime / 1000)
    let weeks = Math.floor(totalSeconds / 604800)
    let days = Math.floor(totalSeconds / 86400)
    let hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = Math.floor(totalSeconds % 60)

    const embed = this.client.util.embed()

    embed.setTitle('📊 Statistics')

    embed.addField('Author', `${this.client.users.get('189850839660101632')}`, true)
    embed.addField('Bot Version', `v${version}`, true)
    embed.addField('Node.js Version', `${process.version}`, true)
    embed.addField('Discord.js Version', `v${require('discord.js/package.json').version}`, true)
    embed.addField('Discord Akairo Version', `v${require('discord-akairo/package.json').version}`, true)
    embed.addField('Uptime', `\`${weeks}w:${days}:${hours}h:${minutes}m:${seconds}s\``, true)
    embed.addField('Servers', `${this.client.guilds.size} servers`, true)
    embed.addField('Users', `${this.client.users.size} users`, true)
    embed.addBlankField(true)

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    return message.channel.send({ embed })
  }
}

export default StatsCommand
