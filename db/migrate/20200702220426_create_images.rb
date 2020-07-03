class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :image
      t.references :live, null: false, foreign_key: {on_delete: :cascade}
      t.timestamps
    end

    remove_column :lives, :image, :string
    remove_column :lives, :image2, :string
  end
end
