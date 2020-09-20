class AddColumnPageUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :employees, :page_url, :string
  end
end
