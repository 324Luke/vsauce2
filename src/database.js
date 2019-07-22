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

  },

  /*
   * CRUD (Create, Read, Update, Delete) functions
   */

  /**
   * Inserts a document into the database
   * @param {String} collection Collection which houses the document we're creating
   * @param {Object} object The document we're creating
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
   * @param {String} collection Collection which houses the document we're searching for
   * @param {Object} searchWith The document we're searching for
   */
  async read (collection, searchWith) {
    const db = await this.connect(database.url)
    const data = await db.collection(collection)

    return new Promise(async (resolve, reject) => {
      await data.find(searchWith, (err, item) => {
        if (err) reject(err)

        resolve(item)
      })
    })
  },

  /**
   * Updates values of documents in the database
   * @param {String} collection Collection which houses the document we're updating
   * @param {Object} searchFor The document to search for
   * @param {Object} toUpdate New data for the document
   */
  async update (collection, searchFor, toUpdate) {
    const db = await this.connect(database.url)
    const data = db.collection(collection)

    return new Promise(async (resolve, reject) => {
      await data.updateOne(searchFor, toUpdate)
    })
  },

  /**
   * Deletes an entire collection in the database
   * @param {String} collection Collection to wipe
   */
  async wipe (collection) {
    return 'Function not finished.'
  },

  /**
   *
   * @param {String} collection Collection to delete object from
   * @param {Object} object Object to find and delete
   */
  async delete (collection, object) {
    return 'Function not finished.'
  }

  // async delete (collection) {
  //   const db = await this.connect(database.url)
  //   const data = db.collection(collection)

  //   return new Promise(async (resolve, reject) => {

  //   })
  // }
}
