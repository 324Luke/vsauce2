module Bot::DiscordCommands
  module Joke
    extend Discordrb::Commands::CommandContainer

    command(:joke,
            description: '',
            usage: '') do
      'Command Coming Soon!'
    end
  end
end
