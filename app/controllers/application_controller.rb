class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :env

  protected

  # rubocop:disable MethodLength
  def env
    gon.push(
      alchemy: {
        root_url: alchemy.root_url.chomp('/')
      },
      # domain: request.domain,
      # rails: {
      #   environment: Rails.env,
      #   key: {
      #     param: request_forgery_protection_token,
      #     token: form_authenticity_token
      #   }
      # },
      spree: {
        key: {
          param: 'X-Spree-Token',
          token: ENV['SPREE_API_TOKEN']
        },
        root_url: spree.root_url(subdomain: 'shop').chomp('/')
      }
    )
  end
  # rubocop:enable MethodLength
end
