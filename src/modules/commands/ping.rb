module Bot::DiscordCommands
  module Ping
    extend Discordrb::Commands::CommandContainer
    command :ping do |event|
      m = event.respond('.')
      times = m.timestamp - Time.now
      ping_time = times * 1000
      m.delete

      event.channel.send_embed do |embed|
        embed.title = '🏓 Pong!'

        embed.add_field(name: 'Message Latency', value: "`#{ping_time.floor}ms`", inline: true)
        embed.add_field(name: 'Discord Heartbeat', value: '...', inline: true)

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
