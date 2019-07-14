/*
 * Database controller
 * Connects to a MongoDB instance and provides helper functions for maniuplating data
 */

import mongoose from 'mongoose'
import { database } from '../data/config'

export default {
  models: mongoose.models,

  async connect (url = database.url) {
    return new Promise((resolve, reject) => {
      mongoose.createConnection(url, { useNewUrlParser: true, dbName: 'vsauce' })
        .then(db => {
          resolve(db)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  /*
   * CRUD (Create, Read, Update, Delete) functions
   */

  /**
   * Inserts a document into the database
   * @param {String} collection
   * @param {Object} object
   */
  async create (collection, object) {
    const db = await this.connect(database.url)
    const data = db.collection(collection)

    return new Promise(async (resolve, reject) => {
      await data.insertOne(object)
    })
  },

  /**
   * Inserts many documents to the database
   * @param {String} collection
   * @param {Object} objects
   */
  async createMany (collection, objects) {
    const db = await this.connect(database.url)
    const data = db.collection(collection)

    return new Promise(async (resolve, reject) => {
      await data.insertMany(objects)
    })
  },

  /**
   * Reads documents from the database
   * @param {String} collection
   * @param {Object} searchWith
   */
  async read (collection, searchWith) {
    const db = await this.connect(database.url)
    const data = await db.collection(collection)

    return new Promise(async (resolve, reject) => {
      await data.find(searchWith, (err, item) => {
        if (err) throw err

        resolve(item)
      })
    })
  },

  /**
   * Updates values of documents in the database
   * @param {String} collection
   * @param {Object} searchFor
   * @param {Object} toUpdate
   */
  async update (collection, searchFor, toUpdate) {
    const db = await this.connect(database.url)
    const data = db.collection(collection)

    return new Promise(async (resolve, reject) => {
      await data.updateOne(searchFor, toUpdate)
    })
  }

  // async delete (collection) {
  //   const db = await this.connect(database.url)
  //   const data = db.collection(collection)

  //   return new Promise(async (resolve, reject) => {

  //   })
  // }
}
