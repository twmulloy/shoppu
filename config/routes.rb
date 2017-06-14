Rails.application.routes.draw do
  devise_scope :spree_user do
    delete '/logout', to: 'spree/user_sessions#destroy'

    get '/login', to: 'spree/user_sessions#new'
    post '/login', to: 'spree/user_sessions#create'
    get '/logout', to: 'spree/user_sessions#destroy'
    get '/signup', to: 'spree/user_registrations#new'
    post '/signup', to: 'spree/user_registrations#create'
    get '/password/recover', to: 'spree/user_passwords#new'
    post '/password/recover', to: 'spree/user_passwords#create'
    get '/password/change', to: 'spree/user_passwords#edit'
    put '/password/change', to: 'spree/user_passwords#update'
    get '/confirm', to: 'spree/user_confirmations#show' if Spree::Auth::Config[:confirmable]
  end

  constraints subdomain: 'shop' do
    mount Spree::Core::Engine, at: '/'
  end

  mount Alchemy::Engine, at: '/'
end
