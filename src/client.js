import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } from 'discord-akairo'
import * as config from '../data/config'

class VSauceClient extends AkairoClient {
  constructor () {
    super({
      ownerID: config.botOwner
    }, {
      disableMentions: 'everyone'
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

    this.commandHandler.useInhibitorHandler(this.inhibitorHandler)
    this.commandHandler.useListenerHandler(this.listenerHandler)

    this.commandHandler.loadAll()
    this.inhibitorHandler.loadAll()
    this.listenerHandler.loadAll()
  }
}

export default VSauceClient
