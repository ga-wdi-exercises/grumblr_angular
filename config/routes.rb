Rails.application.routes.draw do
  resources :grumbles, except: [:new, :edit, :show] do
    resources :comments, except: [:new, :edit, :show]
  end
  root to: redirect('/grumbles')
end
