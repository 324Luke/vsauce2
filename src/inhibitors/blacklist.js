const { Inhibitor } = require('discord-akairo')
const blacklist = require('../../data/blacklistedUsers')

class BlacklistInhibitor extends Inhibitor {
  constructor () {
    super('blacklist', {
      reason: 'blacklist'
    })
  }

  exec (message) {
    return blacklist.includes(message.author.id)
  }
}

module.exports = BlacklistInhibitor
