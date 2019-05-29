require 'httparty'
require 'json'

module Bot::DiscordCommands
  module Insult
    extend Discordrb::Commands::CommandContainer
    command(:insult,
            description: '',
            usage: '') do |event, user|
      response = HTTParty.get('https://insult.mattbas.org/api/insult.json')

      event.channel.send_embed do |embed|
        embed.title = '😢'

        embed.description = "#{user} #{JSON.parse(response.body)['insult']}."

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
