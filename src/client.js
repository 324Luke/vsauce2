import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } from 'discord-akairo'
import * as config from '../data/config'

class VSauceClient extends AkairoClient {
  constructor () {
    super({
      ownerID: config.botOwner
    }, {
      disableMentions: 'everyone',
      presence: config.presence
      // ws: { intents: Intents.ALL }
    })

    this.commandHandler = new CommandHandler(this, {
      directory: './src/commands/',
      prefix: config.commandPrefix,
      handleEdits: true,
      defaultCooldown: 2000,
      commandUtil: true
    })

    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: './src/inhibitors/'
    })

    this.listenerHandler = new ListenerHandler(this, {
      directory: './src/listeners/'
    })

    this.commandHandler.loadAll()
    this.commandHandler.useInhibitorHandler(this.inhibitorHandler)
    this.inhibitorHandler.loadAll()
  }
}

export default VSauceClient
