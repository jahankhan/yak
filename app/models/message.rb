class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true
  validates :dm, inclusion: { in: [false, true] }

  belongs_to :user,
  class_name: 'User',
  primary_key: :id,
  foreign_key: :author_id

  belongs_to :channel

  after_create_commit {MessageBroadcastJob.perform_now self}
end
