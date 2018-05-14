@channels.each do |channel|
  next if channel.dm 
  json.set! channel.id do
    json.partial! 'api/channels/channel', channel: channel
  end
end
