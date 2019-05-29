module Bot::DiscordCommands
  module Joke
    extend Discordrb::Commands::CommandContainer

    command(:joke,
            description: '',
            usage: '') do |event|
      'Coming Soon!'
    end
  end
end
