class AuctionCollectionSerializer < ActiveModel::Serializer

  attributes( :id, :title, :closing, :created_at)
  
end
