class Api::SessionsController < ApplicationController

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def create

    if params[:user]
      user = User.find_by_credentials(
                  params[:user][:email],
                  params[:user][:password])
    else
      auth = request.env['omniauth.auth']

      user = User.find_by_uid(auth[:uid])

      unless user
        user = User.create!(
          uid: auth[:uid],
          first_name: auth[:info][:name].split(' ')[0],
          last_name: auth[:info][:name].split(' ')[1],
          email: SecureRandom::urlsafe_base64(16) + "@" + SecureRandom::urlsafe_base64(16) + ".com",
          # image: auth[:info][:image]
          password: SecureRandom::urlsafe_base64(16)
        )
      end
    end

    session[:user_id] = user.id

    if user.nil?
      head :unprocessable_entity
    else
      sign_in!(user)
      redirect_to root_url
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
