class ChangeTypePageid < ActiveRecord::Migration[5.2]
  def change
    change_column :employees, :shopify_page_id, :bigint
  end
end
