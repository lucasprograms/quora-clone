class AddHasEverLoggedInnnnnnnnnnnToUserrrrrrrrrrr < ActiveRecord::Migration
  def change
    add_column :users, :has_ever_logged_in, :boolean, default: false
  end
end
