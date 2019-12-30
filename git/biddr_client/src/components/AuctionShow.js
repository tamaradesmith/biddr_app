import React from "react"
import { Auction, Bid } from "../requests"
import BidForm from './partials/BidForm'

class AuctionShow extends React.Component {
  state = {
    auction: null,
    errors: [],
    isLoading: true
  };

  createBid = params => {

    Bid.create(params, this.props.match.params.id).then(bid => {
      if (bid.errors) {
        this.setState({ errors: bid.errors });
      } else {
        this.props.history.push(`/bid/${this.props.match.params.id}`);
      }
    });
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
      <main className="AuctionShow ">
        <h2> {auction.title} </h2>

        <div className="grid-card">

          <div className="card-body">
            {auction.description}
            <BidForm errors={this.state.errors} onCreatedBid={this.createBid} className="bid" />
          </div>

          <div>
            <p className="card-p">
              current bid: see below
            </p>
            <p className="card-p">
              Ends at: {new Date(auction.closing).toDateString()}
            </p>
            <p className="card-p">
              reserve price with helded 
            </p>
          </div>


        </div>
        <div className="bids">
          <h3> Previous Bids</h3>
    
          {auction.bids.map((bid, index) => (
            <div key={index} className="bid-card">
              <p> {bid.bid}  on {new Date(bid.created_at).toDateString()} </p>
            </div>
          ))}
        </div>

      </main>
    )
  }
}

export default AuctionShow