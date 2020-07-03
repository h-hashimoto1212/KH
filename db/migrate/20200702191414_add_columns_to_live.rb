class AddColumnsToLive < ActiveRecord::Migration[5.2]
  def change
    add_column :lives, :image2, :string

    rename_column :lives, :link, :title_link
  end
end
