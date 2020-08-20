class AddHandle < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :shopify_handle, :string
  end
end
