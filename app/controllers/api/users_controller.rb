class Api::UsersController < ApplicationController
    def index
      @users = User.includes(:subscribed_topics, :questions, :answers, :answer_comments, :upvoted_answers, :answer_upvotes).all
      render :index
    end

    def show
      @user = User.includes(:subscribed_topics, :questions, :answers, :answer_comments, :upvoted_answers, :answer_upvotes).find(params[:id])
      render :show
    end

    def create
      @user = User.new(user_params)

      if @user.save
        sign_in!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @user = User.find(params[:id])

      @user.update(user_params)

      if @user.save
        render :show
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end

    protected

    def user_params
      self.params.require(:user).permit(:first_name, :last_name, :email, :password, :has_ever_logged_in, :bio, :avatar, :avatar_file_name, :avatar_content_type, subscribed_topic_ids: [])
    end
end
