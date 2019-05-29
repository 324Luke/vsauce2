module Bot::DiscordCommands
  module Gay
    extend Discordrb::Commands::CommandContainer
    command(:gay,
            description: '',
            usage: '') do |event, user|
      event.channel.send_embed do |embed|
        embed.title = '🌈'

        embed.description = "#{user} is #{rand(100)}% gay."

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
