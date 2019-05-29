module Bot::DiscordCommands
  module Memes
    extend Discordrb::Commands::CommandContainer

    command(:meme,
            description: '',
            usage: '') do |event|
      'Coming Soon!'
    end
  end
end
