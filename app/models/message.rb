class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true
  validates :dm, inclusion: { in: [false, true] }

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
  class_name: 'User',
  primary_key: :id,
  foreign_key: :author_id

  belongs_to :channel

  after_create_commit {MessageBroadcastJob.perform_now self}
end
