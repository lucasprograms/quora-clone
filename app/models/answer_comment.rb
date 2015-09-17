class AnswerComment < ActiveRecord::Base
  validates :body, :author_id, :author_id, presence: true

  belongs_to :answer
  belongs_to :author, :class_name => 'User', :foreign_key => :author_id
end
