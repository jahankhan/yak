class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: :show
  before_action :require_not_logged_in, only: :create
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar_url)
  end
end
