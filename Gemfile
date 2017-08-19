ruby '2.4.1'

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.5'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'spree_api', '~> 3.2.3'
gem 'spree_backend', '~> 3.2.3'
gem 'spree_core', '~> 3.2.3'
gem 'spree_frontend', '~> 3.2.3' # TODO: Phaseout
gem 'spree_sample', '~> 3.2.3' # TODO: Remove
gem 'spree_auth_devise', '~> 3.2.0'
gem 'spree_gateway', '~> 3.2.0'
gem 'alchemy_cms', '4.0.0.beta'
gem 'webpacker', '~> 2.0'
gem 'js-routes', '~> 1.3.3'
gem 'gon', '~> 6.1.0'
gem 'rack-cors', '~> 0.4.1', require: 'rack/cors'
gem 'rb-fsevent', '0.9.8'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rubocop', require: false
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
