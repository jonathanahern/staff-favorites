class Api::SettingsController < ShopifyApp::AuthenticatedController

  def show
    @setting = Shop.find(session[:shop_id])
    render :show
  end

  def create
    createPage(page_params)
    render json: page_params
  end

  def update
    @setting = Shop.find(session[:shop_id])

    if @setting.update(setting_params)
      render :show
    else
      render json: {error: @setting.errors.full_messages, status: 422 }
    end

  end

private

    def setting_params
        params.require(:setting).permit(:sticker, :layout)
    end

    def page_params
        params.require(:pageData).permit(:page_title, :subtitle)
    end

    def createPage(pageData)
      title = pageData[:page_title]
      subtitle = pageData[:subtitle].gsub("\n", "<br />");
      @page = ShopifyAPI::Page.new
      @page.title = title
      @page.body_html =
          "<p id='staff-subtitle'>#{subtitle}</p>\n
          <div id='staff-profiles-ele'></div>\n

          <style>\n
            #profile-container {\n
                display: flex;\n
                justify-content: center;\n
            }\n
            #profile-container p {\n
                max-width: 500px;\n
            }\n
            #profile-container img {\n
                width: 220px;\n
                margin-right: 20px;\n
                margin-bottom: 20px;\n
            }\n
            #my-picks-header {\n
                text-align: center;\n
            }\n

            .pick-container {\n
                height: 320px;\n
                width: 280px;\n
                border-bottom: none !important;\n
                overflow: hidden; \n
            }\n
            .staff-picks-products {\n
                width: 100%;\n
                display: flex;\n
                flex-wrap: wrap;\n
                justify-content: space-between;\n
                align-items: center;\n
            }\n
            .clearfix:: after {\n
                content: "";\n
                clear: both;\n
                display: table;\n
            }\n
            .img-container {\n
                float: left;\n
                width: 120px;\n
                align-items: center;\n
                margin-top: 4px;\n
                margin-right: 8px;\n
            }\n
            .pick-container h4  {\n
                margin: 6px 0;\n
            }\n
            @media screen and (max-width: 790px) {\n
                #profile-container {\n
                    flex-direction: column;\n
                    align-items: center;\n
                }\n
            };\n
        </style>"
      if @page.save
        return true
      else
        return false
      end

    end

end