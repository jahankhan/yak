class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all.where('channel_id = ?', params[:channel_id])
  end

  def show
    @message = Message.find_by(id: params[:id])
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render :show
    else
      errors = @message.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id, :dm, :image)
  end
end
