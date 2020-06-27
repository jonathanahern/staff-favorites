# == Schema Information
#
# Table name: employees
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  job_title   :string
#  description :string
#  profile_url :string
#  shop_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Employee < ApplicationRecord

    belongs_to :shop,
        class_name: :Shop,
        primary_key: :id,
        foreign_key: :shop_id

    has_many :products,
        class_name: :Product,
        primary_key: :id,
        foreign_key: :employee_id
  
end
