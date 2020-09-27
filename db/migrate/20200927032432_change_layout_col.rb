class ChangeLayoutCol < ActiveRecord::Migration[5.2]
  def change
    change_column :shops, :layout, :string, :default => "side-col"
  end
end
