import React from 'react'


function NewAuctionForm(props) {
  const { errors = [] } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    const newAuction = {
      title: formData.get("title"),
      description: formData.get("description"),
      reserve: formData.get("reserve"),
      closing: formData.get("closing"),
    };
    props.onCreateAuction(newAuction);
    currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form new-auction">
        <label htmlFor="title" className="form-label"> Title: </label>
        <input type="text" name="title" id="title" placeholder=" Pleace Enter Title" className="form-field" />

        <label htmlFor="description" className="form-label"> Description: </label>
        <input type="text" name="description" id="description" placeholder=" Pleace Enter description" className="form-field" />

        <label htmlFor="reserve" className="form-label"> Reserve price: </label>
        <input type="number" name="reserve" id="reserve" className="form-field" />

        <label htmlFor="closing" className="form-label"> Closing  date: </label>
        <input type="date" name="closing" id="closing" className="form-field" />

        <button type="submit" className="form-button"> Create new Auction</button>


      </div>
    </form>
  )
}


export default NewAuctionForm