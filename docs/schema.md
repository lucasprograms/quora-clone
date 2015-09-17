# Schema Information

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | string    |
author_id   | integer   | not null, foreign key (references users)
topic_id    | integer   | not null, foreign key (references topics)


## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
author_id   | integer   | not null, foreign key (references users)
question_id | integer   | not null, foreign key (references questions)

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
subject     | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## column possibilities: follows, votes
## may add question comments / answer comments
