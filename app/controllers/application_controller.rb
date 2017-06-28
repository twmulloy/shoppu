class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :env

  protected

  def env
    gon.push(
      environment: Rails.env,
      domain: request.domain,
      base_url: {
        # TODO: Find better way to remove trailing slash
        site: alchemy.root_url.chomp('/'),
        shop: spree.root_url(subdomain: 'shop').chomp('/')
      },
      keychain: {
        # TODO: Replace API key
        shop: '219361d1957d53967e0414b9bf29219199fea2b98c54fee9'
      },
      meta: {
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    )
  end
end
