json.extract! message, :id, :body, :author_id, :channel_id, :dm, :image
json.created_at message.created_at.strftime("%-I:%M %p")
