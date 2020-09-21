class Api::FrontEndController < ApplicationController

    def index
        @shopsProducts = Product.getProductIDsSettings(params[:shop])
        render json: @shopsProducts
    end

    def show
        @picks = Product.pickInfo(params[:prodID]).first
        # @page_url = Employee.find(@picks.employee_id).page_url
        render json: @picks
    end

    private

    def front_end_params()
        params.permit(:shop, :prodID);
    end

end
