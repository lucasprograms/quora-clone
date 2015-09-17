class CreateUserTopics < ActiveRecord::Migration
  def change
    create_table :user_topics do |t|
      t.integer :topic_id
      t.integer :user_id

      t.timestamps null: false
    end
    add_index :user_topics, :topic_id
    add_index :user_topics, :user_id
  end
end
