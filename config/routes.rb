Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session
    resources :topics, except: [:new, :edit]
    resources :answers, except: [:new, :edit]
    resources :questions, except: [:new, :edit]
    resources :question_topics, except: [:new, :edit]
    resources :user_topics, except: [:new, :edit]
    resources :question_comments, except: [:new, :edit]
    resources :answer_comments, except: [:new, :edit]
    resources :answer_upvotes
  end

end
