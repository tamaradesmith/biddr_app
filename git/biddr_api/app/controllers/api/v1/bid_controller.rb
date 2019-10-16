class Api::V1::BidController < Api::ApplicationController


def create
  @auction = Auction.find params[:auction_id]
  @bid = Bid.new bid_params
  @bid.auction = @auction
  if @bid.save
    render( json: {id: @bid.auction_id})
  else
    render(
      render(
        json: {errors: bid.errors},
        status: 422
      )
    )
  end

end

private

def bid_params
  params.require(:bid).permit(:bid)
end

end
