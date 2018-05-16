class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # debugger
    Message.create!(data['message'])
  end

  def receive(payload)
    # debugger
    # ActionCable.server.broadcast('room_channel', {message: message.body, channel_id: message.channel_id})
  end
end
