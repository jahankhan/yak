class Api::ChannelsController < ApplicationController

  before_action :require_logged_in

  def index
    @channels = Channel.all
  end

  def show
    @channel = Channel.find_by(id: params[:id])
  end

  def create
    @channel = Channel.new(channel_params)
    if params[:channel][:title] == '-bad-'
      @channel.title = "-#{Channel.last.id + 1}-"
    end
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :dm)
  end
end
