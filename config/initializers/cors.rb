Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins 'shop'
#     resource '*', headers: :any, methods: :any
#   end
end