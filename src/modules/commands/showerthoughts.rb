module Bot::DiscordCommands
  module ShowerThoughts
    extend Discordrb::Commands::CommandContainer

    command(:showerthoughts,
            description: '',
            usage: '') do |event|
      'Coming Soon!'
    end
  end
end
