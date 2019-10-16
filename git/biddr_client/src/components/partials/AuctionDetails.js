import React from "react"
import { Link } from "react-router-dom";

function AuctionDetails(props) {

  const { auction } = props
  return (
    <main className="card-list">
      <div>
        <Link to={`/auctions/${auction.id}`} >
          <h3>   Title:   {auction.title}      </h3>
        </Link>
        <p> Closing Date: {auction.closing} </p>
        <p>  Created on: {new Date(auction.created_at).toLocaleDateString()} </p>
      </div>
    </main>
  )
}

export default AuctionDetails