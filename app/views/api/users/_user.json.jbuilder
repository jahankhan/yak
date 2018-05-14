json.extract! user, :username, :id, :active_channel
json.avatar_url asset_path(user.avatar.url)
