class Api::EmployeesController < ShopifyApp::AuthenticatedController

  def index
    @employees = Employee.all
    render :index
  end

end