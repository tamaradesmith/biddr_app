Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {formate: :json} do
    namespace :v1 do
      resources :auctions do
        resources :bid, only: [:create]
      end
      resources :session, only: [:create, :destroy] do
        get :current, on: :collection
      end
      resources :users, only:[:new, :create] do
        get :current, on: :collection
      end
    end
  end
end
