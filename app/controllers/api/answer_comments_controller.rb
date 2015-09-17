class Api::AnswerCommentsController < ApplicationController

  def create
      @answer_comment = AnswerComment.new(answer_comment_params)

      if @answer_comment.save
        render json: @answer_comment
      else
        render json: @answer_comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @answer_comment = AnswerComment.find(params[:id])
      @answer_comment.try(:destroy)
      render json: {}
    end

    def index
      @answer_comments = AnswerComment.all
      render json: @answer_comments
    end

    def show
      @answer_comment = AnswerComment.includes(:answer).find(params[:id])
      render :show
    end

    def answer_comment_params
      params.require(:answer_comment).permit(:answer_id, :body)
    end

end
