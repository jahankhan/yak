json.channels do
  json.partial! 'api/channels/channel', channel: @channel
  json.userIds @channel.user_ids
end

json.users do
  @channel.users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end
