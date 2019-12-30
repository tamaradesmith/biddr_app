class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :reserve, :closing

  has_many :bids
  belongs_to :user, key: :seller

class BidSerializer < ActiveModel::Serializer
  belongs_to :user, key: :bidder
  attributes :id, :bid, :created_at

end

end
