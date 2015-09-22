json.extract! question, :id, :title, :body, :author_id

json.author question.author, :id, :first_name, :last_name, :email

json.answers do
  json.array! question.answers do |answer|
    json.partial! 'api/answers/answer', answer: answer
  end
end

json.topics do
  json.array! question.topics do |topic|
    json.extract! topic, :id, :subject
  end
end
