class Api::SessionsController < ApplicationController

  before_action :require_not_logged_in, only: :create
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    # debugger
    if @user
      logout
      render json: {}
    else
      render json: ["Nobody to sign out"], status: 404
    end
  end
end
