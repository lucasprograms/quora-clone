# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150924174413) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answer_comments", force: :cascade do |t|
    t.string   "body",       null: false
    t.integer  "answer_id",  null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "answer_comments", ["answer_id"], name: "index_answer_comments_on_answer_id", using: :btree
  add_index "answer_comments", ["author_id"], name: "index_answer_comments_on_author_id", using: :btree

  create_table "answer_downvotes", force: :cascade do |t|
    t.integer  "answer_id",  null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "answer_downvotes", ["answer_id"], name: "index_answer_downvotes_on_answer_id", using: :btree
  add_index "answer_downvotes", ["user_id"], name: "index_answer_downvotes_on_user_id", using: :btree

  create_table "answer_upvotes", force: :cascade do |t|
    t.integer  "answer_id",  null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "answer_upvotes", ["answer_id"], name: "index_answer_upvotes_on_answer_id", using: :btree
  add_index "answer_upvotes", ["user_id"], name: "index_answer_upvotes_on_user_id", using: :btree

  create_table "answers", force: :cascade do |t|
    t.string   "body",        null: false
    t.integer  "question_id", null: false
    t.integer  "author_id",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "answers", ["author_id"], name: "index_answers_on_author_id", using: :btree
  add_index "answers", ["question_id"], name: "index_answers_on_question_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "question_comments", force: :cascade do |t|
    t.string   "body",        null: false
    t.integer  "question_id", null: false
    t.integer  "author_id",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "question_comments", ["author_id"], name: "index_question_comments_on_author_id", using: :btree
  add_index "question_comments", ["question_id"], name: "index_question_comments_on_question_id", using: :btree

  create_table "question_topics", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.integer  "topic_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "question_topics", ["question_id"], name: "index_question_topics_on_question_id", using: :btree
  add_index "question_topics", ["topic_id"], name: "index_question_topics_on_topic_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "body"
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "questions", ["author_id"], name: "index_questions_on_author_id", using: :btree

  create_table "topics", force: :cascade do |t|
    t.string   "subject",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_topics", force: :cascade do |t|
    t.integer  "topic_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_topics", ["topic_id"], name: "index_user_topics_on_topic_id", using: :btree
  add_index "user_topics", ["user_id"], name: "index_user_topics_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                              null: false
    t.string   "password_digest",                    null: false
    t.string   "session_token",                      null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "first_name",                         null: false
    t.string   "last_name",                          null: false
    t.string   "uid"
    t.boolean  "has_ever_logged_in", default: false
    t.string   "bio",                default: ""
  end

end
