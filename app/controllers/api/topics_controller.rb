class Api::TopicsController < ApplicationController

  def create
    @topic = Topic.new(topic_params)

    if @topic.save
      render json: @topic
    else
      render json: @topic.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @topic = Topic.find(params[:id])
    @topic.try(:destroy)
    render json: {}
  end

  def index
    @topics = Topic.all
    render :index
  end

  def show
    @topic = Topic.includes(:subscribers, :questions).find(params[:id])
    render :show
  end

  def topic_params
    params.require(:topic).permit(:subject)
  end

end
