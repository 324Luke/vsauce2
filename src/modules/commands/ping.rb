module Bot::DiscordCommands
  module Ping
    extend Discordrb::Commands::CommandContainer
    command :ping do |event|
      m = event.respond('.')
      ping_time = m.timestamp - Time.now
      m.delete

      event.channel.send_embed do |embed|
        embed.title = '🏓 Pong!'

        embed.add_field(name: 'Message Latency', value: "`#{ping_time}ms`", inline: true)

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
