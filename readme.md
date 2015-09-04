# Welcome to the API for Grumblr

Once setup, you can access your grumblr api at `http://locahost:3000`.

## Setup

1. Install dependencies, setup db

  ```bash
  $ cd grumblr_rails_api
  $ bundle install
  $ rake db:setup
  ```

2. Create config/secrets.yml

  ```yml
  development:
    secret_key_base: a long random string

  test:
    secret_key_base: another long random string

  production:
    secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>
  ```

3. Start your server

  ```sh
  $ rails s
  ```

4. Your api is now available at `http://localhost:3000`
