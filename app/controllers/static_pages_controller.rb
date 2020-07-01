class StaticPagesController < ShopifyApp::AuthenticatedController

    # if !ShopifyAPI::ScriptTag.where(src:" #{ request.base_url}/test.js").present?
    #   ShopifyAPI::ScriptTag.create(:event => "onload" , :src =>"#{request.base_url}/test.js" )
    # end

    def root
        
    end

end