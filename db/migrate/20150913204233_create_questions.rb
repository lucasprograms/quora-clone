class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.string :body
      t.integer :topic_id, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end
    add_index :questions, :topic_id
    add_index :questions, :author_id
  end
end
