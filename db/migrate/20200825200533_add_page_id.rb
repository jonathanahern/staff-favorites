class AddPageId < ActiveRecord::Migration[5.2]
  def change
    add_column :employees, :shopify_page_id, :integer
  end
end
