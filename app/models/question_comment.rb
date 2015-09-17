class QuestionComment < ActiveRecord::Base
  validates :body, :question_id, :author_id, presence: true

  belongs_to :question
  belongs_to :author, :class_name => 'User', :foreign_key => :author_id
end
