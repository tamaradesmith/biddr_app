require 'rails_helper'

RSpec.describe Auction, type: :model do
  describe "validates" do 

    it "should requires a title" do 
      auction = Auction.new
      auction.valid?
      expect(auction.errors.messages).to(have_key(:title))
    end
    it "should require a description" do
      auction = Auction.new
      auction.valid?
      expect(auction.errors.messages).to(have_key(:description))
    end
    it "should require a reserve" do
      auction = Auction.new
      auction.valid?
      expect(auction.errors.messages).to(have_key(:reserve))
    end
    it "should require a closing" do
      auction = Auction.new
      auction.valid?
      expect(auction.errors.messages).to(have_key(:closing))
    end
  end
end
