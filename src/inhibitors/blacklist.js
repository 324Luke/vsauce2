import { Inhibitor } from 'discord-akairo'
import blacklist from '../../data/blacklistedUsers'

class BlacklistInhibitor extends Inhibitor {
  constructor () {
    super('blacklist', {
      reason: 'blacklist'
    })
  }

  async exec (message) {
    return blacklist.includes(message.author.id)
  }
}

export default BlacklistInhibitor
