class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_logged_in, :require_not_logged_in

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { errors: ['Must be logged in'] }, status: 401
      # redirect_to '/'
    end
  end

  def require_not_logged_in
    if current_user
      render json: ['Can\'t be logged in'], status: 401
      # redirect_to '/'
    end
  end
end
