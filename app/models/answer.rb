class Answer < ActiveRecord::Base
  validates :body, :question_id, :author_id, presence: true

  has_many :answer_upvotes
  has_many :answer_downvotes
  has_many :answer_comments
  belongs_to :question
  belongs_to :author, :class_name => 'User', :foreign_key => :author_id

end
