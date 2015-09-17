class Api::UserTopicsController < ApplicationController

    def create
        @question_topic = UserTopic.new(user_topic_params)

        if @user_topic.save
          render json: @user_topic
        else
          render json: @user_topic.errors.full_messages, status: :unprocessable_entity
        end
      end

      def destroy
        @user_topic = UserTopic.find(params[:id])
        @user_topic.try(:destroy)
        render json: {}
      end

      def index
        @user_topics = UserTopic.all
        render json: @user_topics
      end

      def show	
        @user_topic = UserTopic.includes(:answers).find(params[:id])
        render :show
      end

      def user_topic_params
        params.require(:user_topic).permit(:user_id, :topic_id)
      end

end
