class CreateOccasions < ActiveRecord::Migration[5.2]
  def change
    create_table :occasions do |t|
      t.references :live, null: false, foreign_key: {on_delete: :cascade}
      t.date :date, null: false
      t.timestamps
    end
  end
end
