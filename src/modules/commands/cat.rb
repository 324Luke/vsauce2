require 'httparty'
require 'json'

module Bot::DiscordCommands
  module Dog
    extend Discordrb::Commands::CommandContainer
    command([:cat, :kitty],
            description: '',
            usage: '') do |event|
      response = HTTParty.get('http://aws.random.cat/meow')

      event.channel.send_embed do |embed|
        embed.title = ['🐱', '🐈', '😺'].sample
        embed.url = JSON.parse(response.body)['file']

        embed.image = Discordrb::Webhooks::EmbedImage.new(url: JSON.parse(response.body)['file'])

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
