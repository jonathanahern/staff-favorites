class Api::EmployeesController < ShopifyApp::AuthenticatedController

  def index
    @employees = Employee.all
    render :index
  end

  def show
    @employee = Employee.find(params[:id])
    render :show
  end

  def update
    @employee = Employee.find(params[:id])
    
    if @employee.update(employee_params)
      render :show
    else
      render json: @employee.errors.full_messages, status: 422
    end

  end

  def create
    shop_id = session[:shop_id]
    @employee = Employee.new(employee_params)
    @employee.shop_id = shop_id

    if @employee.save
      render json: @employee, status: 200
    else
      render json: @employee.errors.full_messages, status: 401
    end

  end

  def destroy
    @employee = Employee.find(params[:id])
    @employee.destroy
    render :show
  end

  private
    def employee_params
      params.require(:employee).permit(:name, :job_title, :description, :shop_id, :profile_url)
    end

end