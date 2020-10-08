import VSauceClient from './client'
import logger from './logger'
import mongoose from 'mongoose'
import DBL from 'dblapi.js'
import * as config from '../data/config'

if (Number(process.version.slice(1).split('.')[0]) < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.')

const client = new VSauceClient()

if (process.env.NODE_ENV === 'production') {
  const dbl = new DBL(config.listingSites.dbl)

  dbl.on('posted', () => {
    logger.info(`posted server count with ${this.client.users} users and ${this.client.guilds} guilds`)
  })

  dbl.on('error', (e) => {
    throw new Error(logger.error(`DBL ${e}`))
  })
}

logger.wait('logging in ...')

client.login(config.discord.token)
  .then(async () => {
    logger.wait('logging in to database ...')

    await mongoose.connect(config.database.url, {
      useNewUrlParser: true,
      dbName: 'vsauce',
      useUnifiedTopology: true
    })
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
