json.array! @answer_comments do |answer_comment|
  json.partial! 'api/answer_comments/answer_comment', answer_comment: answer_comment
end
