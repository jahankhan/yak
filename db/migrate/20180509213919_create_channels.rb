class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :title, null: false, unique: true
      t.string :topic, default: ''
      t.timestamps
    end
    add_index :channels, :title
  end
end
