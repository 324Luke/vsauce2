module Bot::DiscordCommands
  module Invite
    extend Discordrb::Commands::CommandContainer
    command(:invite) do |event|
      event.channel.send_embed do |embed|
        embed.title = '➕ Invite!'

        embed.description = 'Click [here](https://discordapp.com/api/oauth2/authorize?client_id=532710471367655425&permissions=104156224&scope=bot) to add the bot to your server!'

        embed.color = Bot::CONFIG.color
        embed.timestamp = Time.now
        embed.footer = Discordrb::Webhooks::EmbedFooter.new(text: "Requested by #{event.message.author.username}", icon_url: event.message.author.avatar_url)
      end
    end
  end
end
