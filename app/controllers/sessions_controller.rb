class SessionsController < ApplicationController
  skip_before_action :require_login

  def new
    @user = User.new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      login!(user)
    else
      @user = User.new
      render :new
    end
  end

  def destroy
    logout!
  end
end
