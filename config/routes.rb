Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'request', to: 'pages#request', as: :request
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
