class AnswerUpvote < ActiveRecord::Base
  validates :answer, :user, presence: true
  validates :user, uniqueness: { scope: :answer }

  belongs_to :answer
  belongs_to :user
end
