require 'httparty'
require 'json'

module Bot::DiscordCommands
  module Panda
    extend Discordrb::Commands::CommandContainer
    command(:panda,
            description: '',
            usage: '') do |event|
      response = HTTParty.get('https://some-random-api.ml/img/panda')
      fact = HTTParty.get('https://some-random-api.ml/facts/panda')

      event.channel.send_embed do |embed|
        embed.title = '🐼'
        embed.url = JSON.parse(response.body)['link']

        embed.description = "Cool Panda Fact #{rand(300)}: #{JSON.parse(fact.body)['fact']}"

        embed.image = Discordrb::Webhooks::EmbedImage.new(url: JSON.parse(response.body)['link'])

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
