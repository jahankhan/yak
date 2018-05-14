json.users do
  json.partial! 'api/users/user', user: @user
  json.channelIds @user.channels.where(dm: false).pluck(:id)
  json.dmIds @user.channels.where(dm: true).pluck(:id)
end

json.channels do
  @user.channels.each do |channel|
    json.set! channel.id do
      json.partial! 'api/channels/channel', channel: channel
    end
  end
end
