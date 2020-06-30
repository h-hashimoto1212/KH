class CreateLives < ActiveRecord::Migration[5.2]
  def change
    create_table :lives do |t|
      t.date :date
      t.time :open
      t.time :start
      t.string :title, null:false
      t.text :description
      t.string :image
      t.string :link

      t.timestamps
    end
  end
end
