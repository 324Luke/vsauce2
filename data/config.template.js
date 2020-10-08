module.exports = {
  // bot version
  version: require('../package').version || '3.0.0',

  // default color for embeds
  embedColor: '#36393F',

  // owner(s) of the bot
  botOwner: [''],

  // game the bot is playing
  presence: {
    name: (client) => `${client.users.size} over ${client.guilds.size} guilds || ${this.commandPrefix}help`,
    type: 'WATCHING',
    status: 'DnD'
  },

  // prefix for all commands
  commandPrefix: '',

  // listing site tokens
  listingSites: {
    dbl: '',
    discordbots: '',
    bfd: ''
  },

  // discord api information
  discord: {
    // discord api client id
    clientID: 123,
    // discord api client token
    token: ''
  },

  // database authentication
  database: {
    url: 'mongodb://127.0.0.1:27017/'
  }
}
