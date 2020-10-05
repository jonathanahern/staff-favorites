Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
    namespace :api, defaults: {format: :json} do
      resources :employees
      resources :products
      resources :front_end
      resources :settings
      
      resources :pages, only: :index do
        member do
          get 'getStaff'
        end
      end
      
      # patch '/settings/createSticker', to: 'settings#createSticker', as: 'createSticker'
      # get '/pages/getStaff', to: '/pages#getStaff', as: 'getStaff'
    end

    # get 'api/pages/getStaff', to: 'api/pages#getStaff', as: 'getStaff'

  
  root to: 'static_pages#root'

  mount ShopifyApp::Engine, at: '/'
end
