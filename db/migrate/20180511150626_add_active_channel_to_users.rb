class AddActiveChannelToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :active_channel, :integer, default: ''
  end
end
