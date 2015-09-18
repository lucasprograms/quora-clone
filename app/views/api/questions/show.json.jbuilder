json.partial! 'api/questions/question', question: @question

json.answers do
  json.partial! 'api/questions/answers', question: @question
end
