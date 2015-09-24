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
    @answers = Answer.includes(:question, :answer_upvotes, :answer_comments, :upvoters).all
    if logged_in?
      @upvotes_hash = current_user.upvoted_answers_hash
      @downvotes_hash = current_user.downvoted_answers_hash
    else
      @upvotes_hash = {}
      @downvotes_hash = {}
    end
    render :index
  end

  def show
    @answer = Answer.includes(:question, :answer_upvotes, :answer_comments, :upvoters).find(params[:id])
    @upvotes_hash = {}

    if logged_in?
      @upvotes_hash[@answer.id] = @answer.answer_upvotes.find_by(user_id: current_user.id)
    end

    render :show
  end

  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end
end
