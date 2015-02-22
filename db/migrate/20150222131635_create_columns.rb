class CreateColumns < ActiveRecord::Migration
  def change
    create_table :columns do |t|

      t.integer :game_id
      t.integer :column_id
      t.timestamps null: false
    end
  end
end
