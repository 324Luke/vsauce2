import VSauceClient from './client'
import logger from './logger'
import mongoose from 'mongoose'
import * as config from '../data/config'

const client = new VSauceClient()

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
