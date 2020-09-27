class AddColumnLayout < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :layout, :string, :default => "3-col"
  end
end
