class RemoveTopicIdFromQuestion < ActiveRecord::Migration
  def change
    remove_column :questions, :topic_id
  end
end
