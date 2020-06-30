Rails.application.routes.draw do
  root 'home#main'

  resources :lives
end
