Rails.application.routes.draw do
  resources :grumbles, except: [:new, :edit] do
    resources :comments, except: [:new, :edit]
  end
  root to: redirect('/grumbles')
end
