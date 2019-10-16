import React from "react"
import { Auction } from "../requests"
import AuctionIndex from "./AuctionIndex";

class AuctionShow extends React.Component {
  state = {
    auction: null,
    isLoading: true
  };
  componentDidMount() {
    Auction.one(this.props.match.params.id).then(auction => {
      this.setState({
        auction: auction,
        isLoading: false
      });
    });
  }

  render() {
    if (!this.state.auction) {
      return "Loading";
    }
    const { auction } = this.state
    return (
      <main>
        {console.log(auction)}
        <h2> {auction.title} </h2>
        <div>
          <div>
            {auction.description}
            <p> New Bid</p>
          </div>
          <div>
            <p>
              current bid
            </p>
            <p>
              Ends at: {new Date(auction.closing).toDateString()}
            </p>
            <p>
              reserve price not met
            </p>
          </div>
        </div>
        <div className="bids">
          <h3> Previous Bids</h3>
          {auction.bids.map((bid, index) => (
            <div key={index}>
              <p> {bid.bid} {new Date(bid.created_at).toDateString()} </p>
            </div>
          ))}
        </div>

      </main>
    )
  }
}

export default AuctionShow