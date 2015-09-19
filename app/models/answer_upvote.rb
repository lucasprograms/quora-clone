class AnswerUpvote < ActiveRecord::Base
  validates :answer_id, :user_id, presence: true

  belongs_to :answer, inverse_of: :answer_upvotes
  belongs_to :user, inverse_of: :answer_upvotes
end
