Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
    namespace :api, defaults: {format: :json} do
      resources :employees
      resources :products
      resources :front_end
    end
  
  root to: 'static_pages#root'

  mount ShopifyApp::Engine, at: '/'
end
