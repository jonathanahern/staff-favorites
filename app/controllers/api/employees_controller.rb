class Api::EmployeesController < ShopifyApp::AuthenticatedController

  def index
    @employees = Employee.all
    render :index
  end

  def update
    @employee = Employee.find(params[:id])

    if @employee.update(employee_params)
      render json: @employee
    else
      render json: @employee.errors.full_messages, status: 422
    end
  end

  private
    def post_params
      params.require(:employee).permit(:name, :job_title, :description, :shop_id, :profile_url)
    end

end