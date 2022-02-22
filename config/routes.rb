Rails.application.routes.draw do
  devise_for :users


  namespace :api do
    namespace :v1 do
      get 'requests/index'
      post 'requests/create'
      get '/show/:id', to: 'requests#show'
      delete '/destroy/:id', to: 'requests#destroy'
      put '/update/:id', to: 'requests#update'
      get 'requests/user_requests/:id', to: 'requests#user_requests'
    end
  end
  namespace :api do
    namespace :v1 do
      get '/user_info', to: 'devise_info#user_info'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'users/index'
      get '/user/:id', to: 'users#show'
    end
  end

  root 'home#index'
end
