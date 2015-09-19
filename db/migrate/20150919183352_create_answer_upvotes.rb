class CreateAnswerUpvotes < ActiveRecord::Migration
  def change
    create_table :answer_upvotes do |t|
      t.integer :answer_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    
    add_index :answer_upvotes, :answer_id
    add_index :answer_upvotes, :user_id
  end
end
