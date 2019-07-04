import chalk from 'chalk'

export default {
  async info (message) {
    console.log(`${chalk.blue('info →')} ${message}`)
  },

  async event (message) {
    console.log(`${chalk.magenta('event →')} ${message}`)
  },

  async warn (message) {
    console.log(`${chalk.keyword('orange')('warn →')} ${message}`)
  },

  async error (message) {
    console.log(`${chalk.red('error →')} ${message}`)
  },

  async debug (message) {
    console.log(`${chalk.green('debug →')} ${message}`)
  },

  async ready (message) {
    console.log(`${chalk.hex('#f368e0')('ready →')} ${message}`)
  },

  async wait (message) {
    console.log(`${chalk.hex('#1dd1a1')('waiting →')} ${message}`)
  }
}
