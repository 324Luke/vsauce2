/*
 * Database controller
 * Connects to a MongoDB instance and provides helper functions for maniuplating data
 */

const { database } = require('../data/config')
const mongo = require('mongodb').MongoClient

module.exports = {
  async connect (url = database.url) {
    return new Promise((resolve, reject) => {
      mongo.connect(url, { useNewUrlParser: true })
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

  async create (collection, object) {
    const db = await this.connect(database.url)
    const data = db.db('vsauce').collection(collection)

    return new Promise(async (resolve, reject) => {
      await data.insertOne(object)
    })
  },

  async read (collection, searchWith) {
    const db = await this.connect(database.url)
    const data = await db.db('vsauce').collection(collection)

    return new Promise(async (resolve, reject) => {
      await data.findOne(searchWith, (err, item) => {
        if (err) throw err

        resolve(item)
      })
    })
  },

  async update (collection) {
    const db = await this.connect(database.url)
    const data = db.db('vsauce').collection(collection)

    return new Promise(async (resolve, reject) => {

    })
  },

  async delete (collection) {
    const db = await this.connect(database.url)
    const data = db.db('vsauce').collection(collection)

    return new Promise(async (resolve, reject) => {

    })
  }
}
