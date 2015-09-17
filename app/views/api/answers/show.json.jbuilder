json.extract! @answer, :id, :body, :author_id,:question_id

json.answerComments do
  json.array! @answer.answer_comments do |answer_comment|
    json.extract! answer_comment, :id, :body
  end
end
