class ChannelUser < ApplicationRecord
  validates :user_id, :channel_id, presence: true

  belongs_to :user
  belongs_to :channel

  def create
    @channel_user = ChannelUser.new(channel_user_params)
    if @channel_user.save
      render json: 'Created channel user'
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
