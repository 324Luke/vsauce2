module Bot::DiscordCommands
  module Stats
    extend Discordrb::Commands::CommandContainer
    command([:stats, :info, :statistics], description: 'Recieve some basic statistics on the bot.') do |event|
      bot_owner = Bot::BOT.bot_application.owner
      server_count = 0
      Bot::BOT.servers.each_value { server_count += 1 }

      event.channel.send_embed do |embed|
        embed.title = '📈 VSauce Statistics'

        embed.add_field(name: 'Bot Version', value: Bot::CONFIG.version, inline: true)
        embed.add_field(name: 'Owner', value: "#{bot_owner.name}##{bot_owner.discriminator}", inline: true)
        embed.add_field(name: 'Server Count', value: server_count, inline: true)
        embed.add_field(name: 'Ruby Version', value: "#{RUBY_VERSION}-p#{RUBY_PATCHLEVEL}", inline: true)
        embed.add_field(name: 'Discordrb Version', value: Gem.loaded_specs['discordrb'].version, inline: true)
        embed.add_field(name: 'HTTParty Version', value: Gem.loaded_specs['httparty'].version, inline: true)

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
