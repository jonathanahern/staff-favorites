Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
    namespace :api, defaults: {format: :json} do
      resources :employees
      resources :products
      resources :front_end
      resources :pages
      resources :settings
      # patch '/settings/createSticker', to: 'settings#createSticker', as: 'createSticker'
    end

  
  root to: 'static_pages#root'

  mount ShopifyApp::Engine, at: '/'
end
