class Api::FrontEndController < ApplicationController

    def index
        # render json: {"try again index": "works"}
        @shopsProducts = Product.getProductIDsSettings(params[:shop])
        render json: @shopsProducts
    end

    def show
        render json: {"try again show": "works"}
        @picks = Product.pickInfo(params[:prodID]).first
        render json: @picks
    end

    private

    def front_end_params()
        params.permit(:shop, :prodID);
    end

end
