class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: [:show, :index]
  before_action :require_not_logged_in, only: :create

  def index
    @users = User.all
    render :index
  end
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

  def update
    @user = User.find_by(id: params[:id])
    # debugger
    if params[:channel_id]
      @user.active_channel = params[:channel_id]
    else
      @user.avatar = params[:user][:avatar]
    end


    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar)
  end
end
