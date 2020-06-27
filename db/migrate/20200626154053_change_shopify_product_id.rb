class ChangeShopifyProductId < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :shopify_product_id, :bigint
  end
end
