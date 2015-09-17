json.array! @topics do |topic|
  json.extract! topic, :id, :subject
  json.questions do
    json.array! topic.questions do |question|
      json.extract! question, :id, :title, :body, :author_id
      json.answers do
        json.array! question.answers do |answer|
          json.extract! answer, :id, :body, :author_id, :question_id
        end
      end
    end
  end
end
