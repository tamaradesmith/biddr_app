import React from "react";
import AuctionDetails from "./partials/AuctionDetails";
import { Auction } from "../requests";


class AuctionIndex extends React.Component {

  state = {
    auctions: [],
    isLoading: true
  };
  componentDidMount(){
    Auction.all().then(auctions =>{
  
      this.setState({
        auctions: auctions,
        isLoading: false
      });
    });
  };




  render() {
    if (!this.state.auctions){
      return 'Loading'
    }

    return (
      <main>
      <h1> Current Auctions:</h1>
      <div>
{this.state.auctions.map((auction, index) =>(
  <div key={index}>
        <AuctionDetails auction={ auction } />
  </div>
)
)}

      </div>
      </main>
    )
  }
}

export default AuctionIndex