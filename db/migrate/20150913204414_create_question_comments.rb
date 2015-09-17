class CreateQuestionComments < ActiveRecord::Migration
  def change
    create_table :question_comments do |t|
      t.string :body, null: false
      t.integer :question_id, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end
    add_index :question_comments, :question_id
    add_index :question_comments, :author_id
  end
end
