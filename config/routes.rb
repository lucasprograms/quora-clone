Rails.application.routes.draw do
  root to: 'root#root'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :topics, except: [:new, :edit]
    resources :answers, except: [:new, :edit]
    resources :questions, except: [:new, :edit]
    resources :question_topics, except: [:new, :edit]
    resources :user_topics, except: [:new, :edit]
    resources :question_comments, except: [:new, :edit]
    resources :answer_comments, except: [:new, :edit]
  end
  
end
