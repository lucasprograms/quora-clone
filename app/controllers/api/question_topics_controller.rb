class Api::QuestionTopicsController < ApplicationController

  def create
      @question_topic = QuestionTopic.new(question_topic_params)

      if @question_topic.save
        render json: @question_topic
      else
        render json: @question_topic.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @question_topic = QuestionTopic.find(params[:id])
      @question_topic.try(:destroy)
      render json: {}
    end

    def index
      @question_topics = QuestionTopic.all
      render json: @question_topics
    end

    def show
      @question_topic = QuestionTopic.includes(:answers).find(params[:id])
      render :show
    end

    def question_topic_params
      params.require(:question_topic).permit(:question_id, :topic_id)
    end

end
