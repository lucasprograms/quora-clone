json.extract! @question, :id, :title, :body, :author_id
json.answers do
  json.array! @question.answers do |answer|
    json.extract! answer, :id, :body, :author_id
  end
end
json.topics do
  json.array! @question.topics do |topic|
    json.extract! topic, :id, :subject
  end
end
