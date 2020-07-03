class ChangeCloumnForDetails < ActiveRecord::Migration[5.2]
  def change
    rename_column :details, :open, :open_time
    rename_column :details, :start, :start_time
  end
end
