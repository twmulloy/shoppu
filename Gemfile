source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'coffee-rails'
gem 'uglifier', '>= 1.3.0'
# gem 'redis', '~> 3.0'
# gem 'bcrypt', '~> 3.1.7'

gem 'spree', '~> 3.2.0.rc3'
gem 'spree_auth_devise', '~> 3.2.0.beta'
gem 'spree_gateway', '~> 3.2.0.beta'

gem 'alchemy_cms', github: 'AlchemyCMS/alchemy_cms', branch: 'rails-5'

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
