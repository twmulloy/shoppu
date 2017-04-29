Rails.application.routes.draw do
  constraints subdomain: 'store' do
    mount Spree::Core::Engine, at: '/'
  end

  devise_scope :spree_user do
    get '/login', to: 'spree/user_sessions#new'
    post '/login', to: 'spree/user_sessions#create'
    delete '/logout', to: 'spree/user_sessions#destroy'
  end

  mount Alchemy::Engine, at: '/'
end
