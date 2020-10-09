import chalk from 'chalk'

function log (color, level, message) {
  switch (color) {
    case 'orange':
      console.log(`${chalk.keyword('orange')(`${level} →`)} ${message}`)
    default:
      console.log(`${chalk[color](`${level} →`)} ${message}`)
  }
}

export default {
  info: message => log('blue', 'info', message),
  event: message => log('magenta', 'event', message),
  warn: message => log('orange', 'warn', message),
  error: message => log('red', 'error', message),
  debug: message => log('green', 'debug', message),

  ready: message => {
    console.log(`${chalk.hex('#f368e0')('ready →')} ${message}`)
  },

  wait: message => {
    console.log(`${chalk.hex('#1dd1a1')('waiting →')} ${message}`)
  }
}
