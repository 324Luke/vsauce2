task :install do
  sh 'bundle install --path vendor/bundle --binstubs'
end

task :reload do
  sh 'nodemon src/bot.rb'
end

task :default do
  sh 'bundle exec ruby src/bot.rb'
end
