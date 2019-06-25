const { AkairoClient } = require('discord-akairo')
const { botOwner, commandPrefix, discord } = require('../data/config')
const logger = require('./logger')

const client = new AkairoClient({
  ownerID: botOwner,
  prefix: commandPrefix,
  clientUtil: true,
  commandDirectory: './src/commands/',
  inhibitorDirectory: './src/inhibitors',
  listenerDirectory: './src/listeners/'
}, {
  disableEveryone: true
})

client.login(discord.token)
  .then(() => {
    logger.wait('logging in ...')
  })
  .catch((err) => {
    throw new Error(logger.error(err))
  })
