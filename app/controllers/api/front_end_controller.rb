class Api::FrontEndController < ApplicationController

    def index
        @shopsProducts = Product.getProductIDsSettings(params[:shop])
        render json: @shopsProducts
    end

    def show
        # @picks = Product.pickInfo(params[:prodID]).first
        @picks = Product.first
        render json: @picks
        # render json: {hi: "got this through"}
    end

    private

    def front_end_params()
        params.permit(:shop, :prodID);
    end

end
