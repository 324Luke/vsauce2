const { AkairoClient } = require('discord-akairo')
const { botOwner, commandPrefix, discord } = require('../data/config')

const client = new AkairoClient({
  ownerID: botOwner,
  prefix: commandPrefix,
  commandDirectory: './src/commands/',
  inhibitorDirectory: './src/inhibitors',
  listenerDirectory: './src/listeners/'
}, {
  disableEveryone: true
})

client.login(discord.token)
  .then(() => {
    console.log('Started up!')
  })
  .catch((err) => {
    throw new Error(err)
  })
