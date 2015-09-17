class CreateAnswerComments < ActiveRecord::Migration
  def change
    create_table :answer_comments do |t|
      t.string :body, null: false
      t.integer :answer_id, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end
    add_index :answer_comments, :answer_id
    add_index :answer_comments, :author_id
  end
end
