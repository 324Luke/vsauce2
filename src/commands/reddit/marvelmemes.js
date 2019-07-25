import { Command } from 'discord-akairo'
import { getReddit } from '@src/Utils'
import { embedColor } from '@data/config'

class MarvelMemeCommand extends Command {
  constructor () {
    super('marvel', {
      aliases: [ 'marvel', 'marvelmeme', 'marvelmemes' ],
      category: 'reddit'
    })
  }

  async exec (message) {
    const post = await getReddit('marvelmemes')
    const embed = this.client.util.embed()

    if (!post.is_video && !post.over_18 && post.post_hint === 'image' && !post.stickied) {
      embed.setTitle(post.title)
      embed.setURL(`https://reddit.com${post.permalink}`)
      embed.setImage(post.url)

      embed.setColor(embedColor)
      embed.setTimestamp(new Date())
      embed.setFooter(`👍 ${post.score} | Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

      message.channel.send({ embed })
    }
  }
}

export default MarvelMemeCommand
