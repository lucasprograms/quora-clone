json.results do
  
  json.array! @search_results do |search_result|
    if search_result.searchable_type == "Answer"
      json.partial! "api/answers/answer", answer: search_result.searchable
      json._type "Answer"
    else
      json.partial! "api/questions/question", question: search_result.searchable
      json._type "Question"
    end
  end
end
