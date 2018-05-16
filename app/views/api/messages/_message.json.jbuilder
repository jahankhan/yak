json.extract! message, :id, :body, :author_id, :channel_id, :dm
json.created_at message.created_at.to_formatted_s(:db)
