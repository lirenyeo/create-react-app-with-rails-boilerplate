class Api::V1::CurrentUserController < ApplicationController
  before_action :authenticate_user!

  # endpoint for react app to receive basic info about current user
  def show
    render json: {
      user: current_user,
    }
  end

  def log_out
    p "signing out!!!!!!!!!"
    sign_out current_user
  end
end
