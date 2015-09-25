json.extract! user, :id, :first_name, :last_name, :email, :bio, :has_ever_logged_in, :subscribed_topic_ids

json.topics do
  json.array! user.subscribed_topics do |topic|
    json.partial! 'api/topics/topic', topic: topic
  end
end

json.avatar asset_path(user.avatar.url)
