# == Schema Information
#
# Table name: products
#
#  id                 :bigint           not null, primary key
#  shopify_title      :string           not null
#  shopify_image_url  :string
#  shopify_product_id :integer          not null
#  review             :string
#  shop_id            :integer          not null
#  employee_id        :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Product < ApplicationRecord

    belongs_to :shop,
        class_name: :Shop,
        primary_key: :id,
        foreign_key: :shop_id

    belongs_to :employee,
        class_name: :Employee,
        primary_key: :id,
        foreign_key: :employee_id

    def self.pickInfo(data)
        Product.select(:shopify_title, :shopify_image_url, :shopify_product_id, :review, :shop_id, :employee_id, "employees.name, employees.job_title, employees.profile_url, employees.description").joins(:employee).where("products.shopify_product_id = #{data}")
    end

    def self.getProductIDs(shopDomain)
        test = Product.select(:id, :shopify_product_id).joins(:shop).where("shops.shopify_domain = '#{shopDomain}'")
    end
  
end
