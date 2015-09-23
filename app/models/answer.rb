class Answer < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:body, :question]

  validates :body, :question_id, :author_id, presence: true

  has_many :answer_upvotes
  has_many :upvoters, :through => :answer_upvotes, :source => :user
  has_many :answer_downvotes
  has_many :downvoters, :through => :answer_downvotes, :source => :user
  has_many :answer_comments
  belongs_to :question
  belongs_to :author, :class_name => 'User', :foreign_key => :author_id


  def upvoted_by?(user)
    answer_upvotes.exists?(user_id: user.id)
  end

  def downvoted_by?(user)
    answer_downvotes.exists?(user_id: user.id)
  end
end
