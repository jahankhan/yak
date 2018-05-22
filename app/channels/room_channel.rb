class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
  end

  def speak(data)
    Message.create!(data['message'])
  end

  def receive(payload)
  end
end
