json.channels do
  @channels.each do |channel|
    json.set! channel.id do
      json.extract! :id, :title, :topic
    end
  end
end
