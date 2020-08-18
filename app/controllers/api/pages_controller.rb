class Api::PagesController < ShopifyApp::AuthenticatedController

  def index
    # ShopifyAPI::Session.setup(api_key: ShopifyApp.configuration.api_key, secret: ShopifyApp.configuration.secret);
    # uncToken = Shop.first.shopify_token;
    # session = ShopifyAPI::Session.new(domain: params[:shop] , token: uncToken, api_version: "2020-04")
    # ShopifyAPI::Base.activate_session(session)
    # ShopifyAPI::Base.api_version = ShopifyApp.configuration.api_version
 
    # client = ShopifyAPI::GraphQL.client;

    # query = ShopifyAPI::GraphQL.client.parse <<-'GRAPHQL'
    # {
    #     shop {
    #         name
    #     }
    # }
    # GRAPHQL

    # result = ShopifyAPI::GraphQL.client.query(query);
    
    render json: result, status: 200
  end

end
