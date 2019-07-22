/* eslint-disable no-new */
import DBL from 'dblapi.js'
import { listingSites } from '@data/config'
import axios from 'axios'

/**
 * Generate's a psuedo-random number between min and max arguments
 * @param {Number} min
 * @param {Number} max
 */
export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 *
 * @param {Database} db
 */
export function getDatabasePing (db) {
  return db.ping()
}

/**
 *
 * @param {any} [client] Discord Client Istance
 */
export function postStats (client) {
  if (process.env.NODE_ENV === 'production') {
    // Discord Bots
    new DBL(listingSites.discordbots, client)

    // Discord Bot List
    axios({
      method: 'post',
      url: `https://discordbotlist.com/api/bots/455099726635728896/stats`,

      headers: {
        'Content-Type': 'application/json',
        'Authentication': `Bot ${listingSites.dbl}`
      },

      data: {
        'guilds': Number(client.guilds.size),
        'users': Number(client.users.size),
        'voice_connections': 0
      }
    })

    // Bots For Discord
    axios({
      method: 'post',
      url: `https://botsfordiscord.com/api/bot/455099726635728896/`,

      headers: {
        'Content-Type': 'application/json',
        'Authentication': `${listingSites.bfd}`
      },

      data: {
        'server_count': Number(client.guilds.size)
      }
    })
  }
}
