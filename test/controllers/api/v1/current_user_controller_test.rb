require 'test_helper'

class Api::V1::CurrentUserControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_v1_current_user_show_url
    assert_response :success
  end

end
