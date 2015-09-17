json.extract! @topic, :id, :subject

json.subscribers @topic.subscribers do |subscriber|
  json.extract! subscriber, :id, :email
end

json.questions @topic.questions do |question|
  json.extract! question, :id, :title, :body, :author_id
end
