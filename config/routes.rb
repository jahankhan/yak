Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :channels, only: [:index, :show, :create] do
      resources :messages, only: [:index, :show, :create]
    end
    resources :channel_users, only: [:create]
  end

  # mount ActionCable.server => '/cable'
end
