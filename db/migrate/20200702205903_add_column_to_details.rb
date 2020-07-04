class AddColumnToDetails < ActiveRecord::Migration[5.2]
  def change
    add_column :details, :place, :string
    add_column :details, :place_link, :string
  end
end
