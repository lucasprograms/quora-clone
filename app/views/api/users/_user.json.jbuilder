json.extract! user, :id, :first_name, :last_name, :email, :bio, :has_ever_logged_in

json.topics do
  json.array! user.subscribed_topics do |topic|
    json.partial! 'api/topics/topic', topic: topic
  end
end
