class UserTopic < ActiveRecord::Base
  validates :topic, :user, presence: true

  belongs_to :user, inverse_of: :user_topics
  belongs_to :topic, inverse_of: :user_topics
end
