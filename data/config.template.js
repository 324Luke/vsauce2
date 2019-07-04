export default {
  // bot version
  version: require('../package').version || '3.0.0',

  // default color for embeds

  embedColor: '#36393F',

  // owner of the bot

  botOwner: [ '' ],

  // game the bot is playing

  game: '',

  // prefix for all commands

  commandPrefix: '',

  // discord api information
  discord: {
    // discord api client id
    clientID: 123,
    // discord api client token
    token: ''
  },
  // reddit api information
  reddit: {
    // reddit api client id
    clientID: '',
    // reddit api client secret
    clientSecret: ''
  },

  // database authentication
  database: {
    url: ''
  }
}
