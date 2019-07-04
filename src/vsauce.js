const { AkairoClient } = require('discord-akairo')
const { botOwner, commandPrefix, discord, database } = require('../data/config')
const logger = require('./Logger')
const db = require('./Database')

const client = new AkairoClient({
  ownerID: botOwner,
  prefix: commandPrefix,
  clientUtil: true,
  defaultCooldown: 2000,
  commandDirectory: './src/commands/',
  inhibitorDirectory: './src/inhibitors',
  listenerDirectory: './src/listeners/'
}, {
  disableEveryone: true
})

logger.wait('logging in ...')

client.login(discord.token)
  .then(async () => {
    logger.wait('logging in to database ...')

    await db.connect(database.url)
      .then(() => {
        logger.ready('connected to database ...')
      })
      .catch(err => {
        throw new Error(logger.error(err))
      })
  })
  .catch((err) => {
    throw new Error(logger.error(err))
  })
