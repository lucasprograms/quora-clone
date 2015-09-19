class CreateAnswerDownvotes < ActiveRecord::Migration
  def change
    create_table :answer_downvotes do |t|
      t.integer :answer_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

      add_index :answer_downvotes, :answer_id
      add_index :answer_downvotes, :user_id
  end
end
