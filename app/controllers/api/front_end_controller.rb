class Api::FrontEndController < ApplicationController

    def show
        @front_end_data = Product.pickInfo(params[:prodID])
        render json: @front_end_data
    end

    private

    def front_end_params()
        params.permit(:shop, :prodID);
    end

end
