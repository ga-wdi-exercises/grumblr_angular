class HomeController < ApplicationController
  def index
    render file: Rails.root.join('public', 'grumblr_angular', 'index.html'), layout: false
  end
end
