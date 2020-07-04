class ChangeTableStructures < ActiveRecord::Migration[5.2]
  def change
    remove_column :lives, :open, :time
    remove_column :lives, :start, :time

    rename_table :occasions, :details

    add_column :details, :open, :time
    add_column :details, :start, :time
    add_column :details, :ex_description, :text
  end
end
