class RemoveColumnImageFromMessages < ActiveRecord::Migration[5.1]
  def change
    remove_attachment :messages, :image
  end
end
