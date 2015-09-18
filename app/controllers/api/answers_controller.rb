class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.new(answer_params)
    @answer.author_id = current_user.id

    if @answer.save
      render json: @answer
    else
      render json: @answer.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.try(:destroy)
    render json: {}
  end

  def index
    @answers = Answer.all
    render :index
  end

  def show
    @answer = Answer.includes(:question).find(params[:id])
    render :show
  end

  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end
end
