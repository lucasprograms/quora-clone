Rails.application.routes.draw do


  root to: 'root#root'

  resource :omniauth_session, only: [:create]

  namespace :api, defaults: { format: :json } do
    get "/search", to: "root#search"
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :topic_names, only: [:index]
    resources :topics, except: [:new, :edit]
    resources :answers, except: [:new, :edit]
    resources :questions, except: [:new, :edit]
    resources :question_topics, except: [:new, :edit]
    resources :user_topics, except: [:new, :edit]
    resources :question_comments, except: [:new, :edit]
    resources :answer_comments, except: [:new, :edit]
    resources :answer_upvotes
  end

  get "auth/facebook/callback" => "omniauth_sessions#create"

end
