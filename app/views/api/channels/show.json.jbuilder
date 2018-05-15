json.channels do
  json.set! @channel.id do
    json.partial! 'api/channels/channel', channel: @channel
    json.userIds @channel.user_ids
  end

  current_user.channels.where(dm: true).each do |dm|
    json.set! dm.id do
      json.partial! 'api/channels/channel', channel: dm
      json.userIds dm.user_ids
    end
  end
end

json.users do
  @channel.users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
      json.avatar_url asset_path(user.avatar.url)
      # json.channelIds user.channel_ids
    end
  end
  current_user.channels.where(dm: true).each do |channel|
    channel.users.each do |user|
      json.set! user.id do
        json.extract! user, :id, :username
        json.avatar_url asset_path(user.avatar.url)
        # json.channelIds user.channel_ids
      end
    end
  end
end
