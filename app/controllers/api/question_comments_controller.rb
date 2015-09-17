class Api::QuestionCommentsController < ApplicationController

  def create
      @question_comment = QuestionComment.new(question_comment_params)

      if @question_comment.save
        render json: @question_comment
      else
        render json: @question_comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @question_comment = QuestionComment.find(params[:id])
      @question_comment.try(:destroy)
      render json: {}
    end

    def index
      @question_comments = QuestionComment.all
      render json: @question_comments
    end

    def show
      @question_comment = QuestionComment.includes(:question).find(params[:id])
      render :show
    end

    def question_comment_params
      params.require(:question_comment).permit(:question_id, :body)
    end

end
