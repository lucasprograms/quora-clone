class Api::AnswerUpvotesController < ApplicationController

  def create
    
    @upvote = current_user.answer_upvotes.new(answer_upvote_params)
    @upvote.user_id = current_user.id
    if @upvote.save
      render json: @upvote
    else
      render json: @upvote.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @upvote = current_upvote
    @upvote.destroy
    render json: @upvote
  end

  private

  def current_upvote
    @current_upvote ||= AnswerUpvote.find(params[:id])
  end

  def answer_upvote_params
    params.require(:answer_upvote).permit(:answer_id)
  end

  def require_upvote_owner!
    unless current_upvote.user_id == current_user.id
      render json: ["You must be the Upvote's owner to do that"], status: :unauthorized
    end
  end
    # end private
end
