import { Command } from 'discord-akairo'
import { getReddit } from '../../utils'
import { embedColor } from '../../../data/config'

class StarterPackCommand extends Command {
  constructor () {
    super('starterpack', {
      aliases: ['starterpack', 'starterpacks'],
      category: 'reddit'
    })
  }

  async exec (message) {
    const post = await getReddit('starterpacks')
    const embed = this.client.util.embed()

    if (!post.is_video && !post.over_18 && post.post_hint === 'image' && !post.stickied) {
      embed.setTitle(post.title)
      embed.setURL(`https://reddit.com${post.permalink}`)
      embed.setImage(post.url)

      embed.setColor(embedColor)
      embed.setTimestamp(new Date())
      embed.setFooter(`👍 ${post.score} | Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

      message.channel.send({ embed })
    } else {
      console.log(post.is_video)
      console.log(post.over_18)
      console.log(post.post_hint)
    }
  }
}

export default StarterPackCommand
