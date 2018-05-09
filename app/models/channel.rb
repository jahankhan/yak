class Channel < ApplicationRecord
  validates :title, presence:true, uniqueness: true

  has_many :users
end
