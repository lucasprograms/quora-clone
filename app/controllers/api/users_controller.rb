class Api::UsersController < ApplicationController
    def index
      @users = User.includes(:subscribed_topics).all
      render :index
    end

    def show
      @user = User.includes(:subscribed_topics).find(params[:id])
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
      self.params.require(:user).permit(:first_name, :last_name, :email, :password, :has_ever_logged_in, subscribed_topic_ids: [])
    end
end
