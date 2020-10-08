import { listingSites } from '../data/config'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { AkairoClient } from 'discord-akairo'

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
 * @param {Array} array
 */
export function randomFromArray (array) {
  if (Array.isArray(array)) {
    return array[Math.floor(Math.random() * array.length)]
  }
}

/**
 *
 * @param {AkairoClient} [client] Discord Client Instance
 */
export function postStats (client) {
  if (process.env.NODE_ENV === 'production') {
    // Discord Bot List
    axios({
      method: 'post',
      url: 'https://discordbotlist.com/api/bots/455099726635728896/stats',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bot ${listingSites.dbl}`
      },

      data: {
        guilds: Number(client.guilds.size),
        users: Number(client.users.size),
        voice_connections: 0
      }
    })

    // Bots For Discord
    axios({
      method: 'post',
      url: 'https://botsfordiscord.com/api/bot/455099726635728896/',

      headers: {
        'Content-Type': 'application/json',
        Authorization: listingSites.bfd
      },

      data: {
        server_count: Number(client.guilds.size)
      }
    })
  } else {
    return 'Node Environment is not production. Can\'t post stats.'
  }
}

/**
 *
 * @param {String} subreddit
 */
export async function getReddit (subreddit) {
  const res = await axios.get(`https://www.reddit.com/r/${subreddit}/hot.json`)
  if (res.length === 0) {
    return false
  } else {
    let max = []
    max = res.data.data.children.map(i => i.data.ups)

    const rand = Math.floor(Math.random() * max.length)

    const post = res.data.data.children.filter(i => i.data.ups === max[rand])

    return post[0].data
  }
}
