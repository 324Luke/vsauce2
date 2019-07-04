import { Command } from 'discord-akairo'

class StatsCommand extends Command {
  constructor () {
    super('stats', {
      aliases: [ 'stats' ],
      category: 'misc'
    })
  }

  async exec (message) {
    return message.channel.send('stats command ran')
  }
}

export default StatsCommand
