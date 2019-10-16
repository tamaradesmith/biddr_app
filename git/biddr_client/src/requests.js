const BASE_URL = 'http://localhost:3000/api/v1'



const Auction ={
  all(){
    return fetch(`${BASE_URL}/auctions`, {
      credentials: 'include'
    }).then(res => res.json())
  },
  one(id){
    return fetch(`${BASE_URL}/auctions/${id}`, {
      credentials: 'include' 
    }).then(res => res.json())
  }
}


export { Auction };