class Api::FrontEndController < ApplicationController

    def index
        @shopsProdcuts = Product.getProductIDs(params[:shop])
        render json: @shopsProdcuts
    end

    def show
        @front_end_data = Product.pickInfo(params[:prodID])
        render json: @front_end_data
    end

    private

    def front_end_params()
        params.permit(:shop, :prodID);
    end

end
