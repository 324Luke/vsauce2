import { Command } from 'discord-akairo'
import { embedColor } from '../../../data/config'

class UptimeCommand extends Command {
  constructor () {
    super('uptime', {
      aliases: ['uptime'],
      category: 'misc',
      description: '⌚ Shows how long the bot has been online'
    })
  }

  async exec (message) {
    let totalSeconds = (this.client.uptime / 1000)
    const weeks = Math.floor(totalSeconds / 604800)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)

    const embed = this.client.util.embed()

    embed.setTitle('⌚ Uptime')
    embed.setDescription(`VSauce has been running for \`${(weeks === 0) ? '' : `${weeks}w:`}${(days === 0 ? '' : `${days}d:`)}${(hours === 0 ? '' : `${hours}h:`)}${(minutes === 0 ? '' : `${minutes}m:`)}${(seconds === 0 ? '' : `${seconds}s`)}\``)

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    return message.channel.send({ embed })
  }
}

export default UptimeCommand
