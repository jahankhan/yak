@channels.each do |channel|
  next if channel.dm  || current_user.channels.include?(channel)
  json.set! channel.id do
    json.partial! 'api/channels/channel', channel: channel
  end
end
