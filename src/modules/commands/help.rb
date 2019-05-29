module Bot::DiscordCommands
  module Help
    extend Discordrb::Commands::CommandContainer

    command(:help,
            description: 'Shows a list of all commands available for this server.',
            usage: '') do |event|
      event.channel.send_embed do |embed|
        embed.title = '📒 VSauce Bot Help'
        embed.description = 'Need more help than I can provide? Join our [support server](https://discord.gg/ZRkSVjq)!'

        embed.add_field(name: "`#{Bot::CONFIG.prefix}help`", value: 'Shows a list of all the commands available for this server.', inline: false)
        embed.add_field(name: "`#{Bot::CONFIG.prefix}ping`", value: 'Gets the bots current ping to discord.', inline: false)
        embed.add_field(name: "`#{Bot::CONFIG.prefix}stats, #{Bot::CONFIG.prefix}info, #{Bot::CONFIG.prefix}statistics`", value: 'Returns basic statistics on the bot.', inline: false)
        embed.add_field(name: "`#{Bot::CONFIG.prefix}invite`", value: 'Returns an invite for the bot!', inline: false)
        embed.add_field(name: "`#{Bot::CONFIG.prefix}dog, #{Bot::CONFIG.prefix}doggo`", value: '🐶 Returns a random dog image and fact!', inline: false)
        embed.add_field(name: "`#{Bot::CONFIG.prefix}bird, #{Bot::CONFIG.prefix}birb`", value: '🕊 Returns a random bird image and fact!', inline: false)
        embed.add_field(name: "`#{Bot::CONFIG.prefix}cat, #{Bot::CONFIG.prefix}kitty`", value: '🐱 Returns a random cat image and fact!', inline: false)
        embed.add_field(name: "`#{Bot::CONFIG.prefix}bunny`", value: '🐰 Returns a random bunny image and fact!', inline: false)
        embed.add_field(name: "`#{Bot::CONFIG.prefix}duck`", value: '🦆 Returns a random duck image and fact!', inline: false)

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
