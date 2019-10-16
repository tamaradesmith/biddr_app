class Auction < ApplicationRecord

  has_many :bids, dependent: :destroy
  belongs_to :user

  # validates
  validates(:title, presence: true)
  validates(:description, presence: true)
  validates(:reserve, numericality: {
    greater_than: 0})
  validates(:closing, presence: true )

end
