

class Api::QuestionsController < ApplicationController

  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id

    @question.topic_ids = question_params[:topic_ids]

    if @question.save
      render json: @question
    else
      render json: @question.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.try(:destroy)
    render json: {}
  end

  def index
    @questions = Question.includes(:answers, :topics).all
    render :index
  end

  def show
    @question = Question.includes(:answers, :topics).find(params[:id])
    render :show
  end

  def question_params
    params.require(:question).permit(:title, :body, topic_ids: [])
  end
end
