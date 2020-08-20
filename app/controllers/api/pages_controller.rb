class Api::PagesController < ApplicationController

  def index
    @products = Employee.find(params[:employeeid]).products
    render :index
  end

  def show

  end

  def create
  end

  def update
  end

  def delete
  end



end
