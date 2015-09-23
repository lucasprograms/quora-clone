class Question < ActiveRecord::Base
  validates :title, :author_id, presence: true
  include PgSearch
  multisearchable against: [:title, :body]

  has_many :answers
  has_many :question_comments
  has_many :question_topics
  has_many :topics, :through => :question_topics, :source => :topic
  belongs_to :author, :class_name => 'User', :foreign_key => :author_id
end
