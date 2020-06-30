Rails.application.routes.draw do
  root 'home#main'

  resources :lives
  resources :inquiries, only: [:create]
end
