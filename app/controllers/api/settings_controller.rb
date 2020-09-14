class Api::SettingsController < ShopifyApp::AuthenticatedController

  def show
    @setting = Shop.find(session[:shop_id])
    render :show
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
        params.require(:setting).permit(:sticker)
    end

end