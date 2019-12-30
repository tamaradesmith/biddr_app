import React from "react"
import { Auction } from "../requests"
import NewAuctionForm from './partials/NewAuctionForm'

class AuctionNew extends React.Component {
  state = {
    errors: [],
  }
 

  createAuction = params => {
    Auction.create(params).then(auction => {
      if (auction.errors) {
        this.setState({ errors: auction.errors });
      } else {
        this.props.history.push(`/auctions/${auction.id}`);
      }
    });
  };
  render() {
    return (
      <main>
        <NewAuctionForm errors={this.state.errors} onCreateAuction={this.createAuction} />
      </main>
    )
  }
}

export default AuctionNew