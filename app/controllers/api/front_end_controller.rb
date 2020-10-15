class Api::FrontEndController < ApplicationController

    def index
        # render json: {"try again index": params[:shop]}
        @shopsProducts = Product.getProductIDsSettings(params[:shop])
        render json: @shopsProducts
    end

    def show
        @picks = Product.pickInfo(params[:prodID]).first
        render json: @picks
    end

    private

    def front_end_params()
        params.permit(:shop, :prodID);
    end

end
