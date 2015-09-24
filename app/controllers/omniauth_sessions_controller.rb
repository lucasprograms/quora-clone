class OmniauthSessionsController < ApplicationController

  def create
    auth = request.env['omniauth.auth']

    user = User.find_by_uid(auth[:uid])

    unless user
      user = User.create!(
        uid: auth[:uid],
        first_name: auth[:info][:name].split(' ')[0],
        last_name: auth[:info][:name].split(' ')[1],
        email: SecureRandom::urlsafe_base64(16) + "@" + SecureRandom::urlsafe_base64(16) + ".com",
        password: SecureRandom::urlsafe_base64(16)
      )
    end

    session[:user_id] = user.id

    if user
      sign_in!(user)
      redirect_to root_url
    else
      head :unprocessable_entity
    end
  end


end
