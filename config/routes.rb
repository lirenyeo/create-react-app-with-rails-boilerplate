Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "/current_user.json" => "current_user#show"
      get "/log_out.json" => "current_user#log_out"

      get "/tests" => "tests#index"
    end
  end
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users

  get "*path", to: "application#frontend_index_html", constraints: lambda { |request|
             !request.xhr? && request.format.html?
           }
end
