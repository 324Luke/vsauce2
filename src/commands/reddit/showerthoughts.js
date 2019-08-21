import { Command } from 'discord-akairo'
import { getReddit } from '@src/utils'
import { embedColor } from '@data/config'

class ShowerThoughtsCommand extends Command {
  constructor () {
    super('showerthought', {
      aliases: [ 'showerthought', 'showerthoughts' ],
      category: 'reddit'
    })
  }

  async exec (message) {
    const post = await getReddit('showerthoughts')
    const embed = this.client.util.embed()

    if (!post.is_video && !post.over_18 && post.selftext.length < 2047 && !post.stickied) {
      embed.setTitle(post.title)
      embed.setURL(`https://reddit.com${post.permalink}`)
      embed.setDescription(post.selftext)

      embed.setColor(embedColor)
      embed.setTimestamp(new Date())
      embed.setFooter(`👍 ${post.score} | Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

      message.channel.send({ embed })
    }
  }
}

export default ShowerThoughtsCommand
