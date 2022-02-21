Rails.application.routes.draw do
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get 'requests/index'
      post 'requests/create'
      get '/show/:id', to: 'requests#show'
      delete '/destroy/:id', to: 'requests#destroy'
      put '/update/:id', to: 'requests#update'
      #get 'requests/user_requests/:id', to: 'requests#user_requests'
    end
  end

end
