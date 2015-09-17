# require 'byebug'

class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :questions, :class_name => 'Question', :foreign_key => :author_id
  has_many :answers, :class_name => 'Answer', :foreign_key => :author_id
  has_many :answer_comments, :class_name => 'AnswerComment', :foreign_key => :author_id
  has_many :question_comments, :class_name => 'QuestionComment', :foreign_key => :author_id
  has_many :user_topics
  has_many :subscribed_topics, :through => :user_topics, :source => :topic

  after_initialize :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def subscribe(topic_id)
    topic = UserTopic.new({
      topic_id: topic_id,
      user_id: self.id
    })

    topic.save!
  end
end
