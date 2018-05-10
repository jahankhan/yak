class Api::ChannelUsersController < ApplicationController
  def create
    @channel_user = ChannelUser.new(channel_user_params)
    @channel_user[:user_id] = current_user.id
    if @channel_user.save
      render json: { channel_id: @channel_user.channel_id }
    else
      errors = @channel_user.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def channel_user_params
    params.require(:channel_user).permit(:user_id, :channel_id)
  end
end
