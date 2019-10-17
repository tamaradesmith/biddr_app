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
      <div>
        <label htmlFor="title"> Title: </label>
        <input type="text" name="title" id="title" placeholder=" Pleace Enter Title" />

        <label htmlFor="description"> Description: </label>
        <input type="text" name="description" id="description" placeholder=" Pleace Enter description" />

        <label htmlFor="reserve"> Reserve price: </label>
        <input type="number" name="reserve" id="reserve" />

        <label htmlFor="closing"> Closing  date: </label>
        <input type="date" name="closing" id="closing" />

      <button type="submit"> Create new Auction</button>


      </div>
    </form>
  )
}


export default NewAuctionForm