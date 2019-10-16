class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :reserve, :closing

  has_many :bids

class BidSerializer < ActiveModel::Serializer
  attributes :id, :bid
end

end
