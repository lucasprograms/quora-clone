# require 'byebug'

class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :questions, :class_name => 'Question', :foreign_key => :author_id
  has_many :answers, :class_name => 'Answer', :foreign_key => :author_id

  has_many :answer_upvotes
  has_many :upvoted_answers, :through => :answer_upvotes, :source => :answer

  has_many :answer_comments, :class_name => 'AnswerComment', :foreign_key => :author_id

  has_many :user_topics
  has_many :subscribed_topics, :through => :user_topics, :source => :topic

  has_attached_file :avatar, default_url: "http://www.sinaiem.org/people/files/2013/03/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
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

  def upvoted_answers_hash
    zipped_upvotes = upvoted_answers.pluck(:answer_id).zip(upvoted_answers)
    upvoted_answers_hash = {}

    zipped_upvotes.each do |(id, upvote)|
      upvoted_answers_hash[id] = upvote
    end

    upvoted_answers_hash
  end

  def subscribe(topic_id)
    topic = UserTopic.new({
      topic_id: topic_id,
      user_id: self.id
    })

    topic.save!
  end
end
