class AnswerDownvote < ActiveRecord::Base
  validates :answer_id, :user_id, presence: true

  belongs_to :answer, inverse_of: :answer_downvotes
  belongs_to :user, inverse_of: :answer_downvotes
end
