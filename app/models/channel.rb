class Channel < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :dm, inclusion: { in: [false, true] }

  has_many :channel_users
  has_many :users, through: :channel_users
end
