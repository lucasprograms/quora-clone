json.extract! topic, :id, :subject

json.questions do
  json.array! topic.questions do |question|
    json.partial! 'api/questions/question', question: question
  end
end
