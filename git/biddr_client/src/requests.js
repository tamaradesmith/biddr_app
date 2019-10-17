const BASE_URL = 'http://localhost:3000/api/v1'

const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json())
  },
}

const Auction = {
  all() {
    return fetch(`${BASE_URL}/auctions`, {
      credentials: 'include'
    }).then(res => res.json())
  },
  one(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      credentials: 'include'
    }).then(res => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/auctions`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(params)
    }).then((res) => res.json());
  },
}
const Bid ={
  create(params, auction_id) {
    console.log(params)
    return fetch(`${BASE_URL}/auctions/${auction_id}/bid`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(params)
    }).then((res) => res.json());
  },
}
const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/session/${id}`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  },
}

export { User, Auction, Session, Bid };