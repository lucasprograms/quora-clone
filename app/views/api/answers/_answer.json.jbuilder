json.extract! answer, :id, :body, :question_id, :author_id

json.answer_comments do
  json.array! answer.answer_comments do |answer_comment|
    json.partial! 'api/answer_comments/answer_comment',
    answer_comment: answer_comment
  end
end

json.author answer.author, :id, :first_name, :last_name, :email, :bio, :avatar

json.question answer.question, :id, :title, :body, :author_id

json.answer_upvotes answer.answer_upvotes

json.num_upvotes answer.answer_upvotes.size

if answer.answer_upvotes.find_by(user_id: current_user.id)
  json.has_upvoted true
else
  json.has_upvoted false
end
