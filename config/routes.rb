Rails.application.routes.draw do

  scope :api do
    resources :grumbles, except: [:new, :edit] do
      resources :comments, except: [:new, :edit]
    end
  end

  root to: 'home#index'

  match '*path' => 'home#index', via: :get
end
