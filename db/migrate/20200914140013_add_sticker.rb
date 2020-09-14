class AddSticker < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :sticker, :string, :default => "red"
  end
end
