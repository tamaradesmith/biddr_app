import React from 'react';

function BidForm(props) {

  const { errrors = [] } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    const newBid = {
      bid: formData.get("bid"),
    };
    props.onCreatedBid(newBid);
    currentTarget.reset();
  }


  return (
    <form onSubmit={handleSubmit}  >
    <div className="form-bid">

      <label htmlFor="bid" className="form-label">Bid:</label>
      <input type="text" name="bid" id="bid" placeholder="Please Enter bid" className="form-field" />
        <button type="submit" className="form-button">Submit Bid</button>
    </div>
    </form>
  )
}

export default BidForm