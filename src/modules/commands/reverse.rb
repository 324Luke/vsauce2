module Bot::DiscordCommands
  module Reverse
    extend Discordrb::Commands::CommandContainer
    command([:reverse, :nou],
            description: '',
            usage: '') do |event|
      event.channel.send_embed do |embed|
        embed.title = '🔃'
        embed.image = Discordrb::Webhooks::EmbedImage.new(url: ['https://i.imgur.com/yXEiYQ4.png', 'https://i.imgur.com/CSuB3ZW.png', 'https://i.imgur.com/3WDcYbV.png', 'https://i.imgur.com/IxDEdxW.png'].sample)

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
