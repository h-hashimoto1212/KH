class ChangeColumnTypesForDetails < ActiveRecord::Migration[5.2]
  def change
    change_column :details, :open_time, :string
    change_column :details, :start_time, :string
  end
end
