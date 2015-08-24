require 'test_helper'

class GrumblesControllerTest < ActionController::TestCase
  setup do
    @grumble = grumbles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:grumbles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create grumble" do
    assert_difference('Grumble.count') do
      post :create, grumble: { authorName: @grumble.authorName, content: @grumble.content, photoUrl: @grumble.photoUrl, title: @grumble.title }
    end

    assert_redirected_to grumble_path(assigns(:grumble))
  end

  test "should show grumble" do
    get :show, id: @grumble
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @grumble
    assert_response :success
  end

  test "should update grumble" do
    patch :update, id: @grumble, grumble: { authorName: @grumble.authorName, content: @grumble.content, photoUrl: @grumble.photoUrl, title: @grumble.title }
    assert_redirected_to grumble_path(assigns(:grumble))
  end

  test "should destroy grumble" do
    assert_difference('Grumble.count', -1) do
      delete :destroy, id: @grumble
    end

    assert_redirected_to grumbles_path
  end
end
