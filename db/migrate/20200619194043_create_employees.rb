class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.string :name, null: false
      t.string :job_title
      t.string :description
      t.string :profile_url
      t.integer :shop_id, null: false

      t.timestamps
    end
    add_index :employees, :shop_id
  end
end
