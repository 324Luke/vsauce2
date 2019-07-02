module Bot::DiscordCommands
  module Owner
    extend Discordrb::Commands::CommandContainer
    command([:o, :owner], help_available: false) do |event, command, *args|
      break unless event.user.id == Bot::CONFIG.owner

      case command
      when 'eval'
        begin
          event.channel.send_embed do |embed|
            embed.add_field(name: 'Input: ', value: "```\n#{args.join(' ')}```")
            embed.add_field(name: 'Output: ', value: "```\n#{eval args.join(' ')}```")
            embed.colour = Bot::CONFIG.color
          end
        rescue => e
          "An error occurred 😞 ```#{e}```"
        end

      when 'shutdown'
        begin
          # TODO: Make the bot go invisible on shut down
          event.channel.send_embed do |embed|
            embed.title = 'Shutting down'
            embed.description = 'The bot is shutting down...'
            embed.color = Bot::CONFIG.color
          end

          sleep 1
          Bot::BOT.stop
        rescue => e
          "An error occurred 😞 ```#{e}```"
        end

      when 'say'
        begin
          event.respond(args.join(' '))
        rescue => e
          "An error occurred 😞 ```#{e}```"
        end

      when 'reload'
        begin
          Bot.load_modules(:DiscordCommands, 'commands')
          Bot.load_modules(:DiscordEvents, 'events', true)
        rescue => e
          "An error occurred 😞 ```#{e}```"
        end

      end
    end
  end
end