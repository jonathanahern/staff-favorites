ShopifyApp.configure do |config|
  config.application_name = "My Shopify App"
  config.api_key = ENV['api_key']
  config.secret = ENV['api_secret']
  config.old_secret = ""
  config.scope = "read_products, read_script_tags, write_script_tags, read_content, write_content," 
  config.embedded_app = true
  config.after_authenticate_job = false
  config.api_version = "2020-04"
  config.shop_session_repository = 'Shop'
  config.scripttags = [
    {event:'onload', src: 'https://uncles-staff-picks.herokuapp.com/insert.js'}
  ]
  config.webhooks = [
    {topic: 'products/update', address: 'https://uncles-staff-picks.herokuapp.com/webhooks/products_update', format: 'json'},
  ]
end

# ShopifyApp::Utils.fetch_known_api_versions                        # Uncomment to fetch known api versions from shopify servers on boot
# ShopifyAPI::ApiVersion.version_lookup_mode = :raise_on_unknown    # Uncomment to raise an error if attempting to use an api version that was not previously known
