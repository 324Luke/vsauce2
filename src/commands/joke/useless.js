import { Command } from 'discord-akairo'
import uselessSites from '../../../data/useless.json'

class UselessCommand extends Command {
  constructor () {
    super('useless', {
      aliases: ['useless', 'uselessweb'],
      category: 'joke',
      description: '😀 Returns a random useless website!'
    })
  }

  async exec (message) {
    return message.channel.send(uselessSites[Math.floor(Math.random() * uselessSites.length)])
  }
}

export default UselessCommand
