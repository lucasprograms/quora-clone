json.extract! answer_comment, :id, :body, :author_id, :answer_id

json.author answer_comment.author, :id, :first_name, :last_name, :email
