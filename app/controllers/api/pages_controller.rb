class Api::PagesController < ShopifyApp::AuthenticatedController

  def create
    debugger;
    @page = ShopifyAPI::Page.new
    @page.title = "This is a test page for real not really"
    @page.body_html = "<h2>Warranty number 2</h2>\n<p>Returns accepted if we receive items <strong>30 days after purchase</strong>.</p>"
    @page.save
    render json: @page, status: 200

  end

end
