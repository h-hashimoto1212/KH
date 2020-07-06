class RenameColumnForImage < ActiveRecord::Migration[5.2]
  def change
    rename_column :images, :image, :file
  end
end
