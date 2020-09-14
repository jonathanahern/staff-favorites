# frozen_string_literal: true

# == Schema Information
#
# Table name: shops
#
#  id             :bigint           not null, primary key
#  shopify_domain :string           not null
#  shopify_token  :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Shop < ActiveRecord::Base
  include ShopifyApp::ShopSessionStorage

  has_many :employees,
    class_name: :Employee,
    primary_key: :id,
    foreign_key: :shop_id

  has_many :products,
    class_name: :Product,
    primary_key: :id,
    foreign_key: :shop_id

  def api_version
    ShopifyApp.configuration.api_version
  end
  
end
