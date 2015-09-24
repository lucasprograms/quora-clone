class Topic < ActiveRecord::Base
  validates :subject, presence: true
  validates :subject, uniqueness: true

  has_many :answers, :through => :questions, :source => :answers
  has_many :user_topics
  has_many :subscribers, :through => :user_topics, :source => :user
  has_many :question_topics
  has_many :questions, :through => :question_topics, :source => :question
end
