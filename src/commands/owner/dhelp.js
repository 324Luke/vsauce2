import { Command } from 'discord-akairo'
import { embedColor, commandPrefix } from '@data/config'

class HelpCommand extends Command {
  constructor () {
    super('dhelp', {
      aliases: ['dhelp'],
      category: 'owner',
      clientPermissions: ['EMBED_LINKS'],
      quoted: false,
      ownerOnly: true,
      args: [
        {
          id: 'command',
          type: 'commandAlias',
          prompt: {
            start: 'Which command do you need help with?',
            retry: 'Please provide a valid command.',
            optional: true
          }
        }
      ],
      description: {
        content: 'Displays a list of commands or information about a command.',
        usage: '[command]',
        examples: ['', 'stats', 'js']
      }
    })
  }

  exec (message, { command }) {
    if (!command) return this.execCommandList(message)

    const prefix = this.handler.prefix(message)
    const description = Object.assign({
      content: 'No description available.',
      usage: '',
      examples: [],
      fields: []
    }, command.description)

    const embed = this.client.util.embed()
      .setColor(embedColor)
      .setTitle(`\`${prefix}${command.aliases[0]} ${description.usage}\``)
      .addField('Description', description.content)

    for (const field of description.fields) embed.addField(field.name, field.value)

    if (description.examples.length) {
      const text = `${prefix}${command.aliases[0]}`
      embed.addField('Examples', `\`${text} ${description.examples.join(`\`\n\`${text} `)}\``, true)
    }

    if (command.aliases.length > 1) {
      embed.addField('Aliases', `\`${command.aliases.join('` `')}\``, true)
    }

    return message.util.send({ embed })
  }

  async execCommandList (message) {
    const embed = this.client.util.embed()

    embed.setTitle('📒 VSauce Bot Help')
    embed.setDescription('Need more help than I can provide? Join our [support server](https://discord.gg/9fvBYnM)!')
    embed.addField('Command List', `To view details for a command, do \`${commandPrefix}help <command>\``)

    embed.setColor(embedColor)
    embed.setTimestamp(new Date())
    embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

    for (const category of this.handler.categories.array()) {
      for (const command of category.filter(cmd => cmd.aliases.length).map(cmd => cmd)) {
        if (!command.ownerOnly) {
          embed.addField(`\`${command.aliases}\``, `${(command.description === '') ? '❌ There is no description available for this command.' : command.description} `)
        }
      }
      // embed.addField(`${category.filter(cmd => cmd.aliases.length > 0).map(cmd => cmd)}`, '2')
    }

    await message.util.send({ embed })

    return undefined
  }
}

export default HelpCommand
