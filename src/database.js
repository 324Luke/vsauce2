/*
 * Database controller
 * Connects to a MongoDB instance and provides helper functions for maniuplating data
 */

import mongoose from 'mongoose'
import { database } from '../data/config'

export default {
  models: mongoose.models,

  /**
   * Connects to the database
   * @param {String} url Mongo url we're connecting to
   * @param {String} dbName The database we're connecting to
   */
  async connect (url = database.url, dbName = 'vsauce') {
    return new Promise((resolve, reject) => {
      mongoose.createConnection(url, { useNewUrlParser: true, dbName })
        .then(db => {
          resolve(db)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  async ping () {

  }
}
