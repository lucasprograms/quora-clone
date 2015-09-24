class AddUidToUser < ActiveRecord::Migration
  def change
    remove_column :users, :has_ever_logged_in
    add_column :users, :uid, :integer
  end
end
