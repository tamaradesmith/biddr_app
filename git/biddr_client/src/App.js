import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import NavBar from './components/partials/NavBar';
import AuctionIndex from './components/AuctionIndex'
import AuctionShow from './components/AuctionShow'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/auctions" exact component={AuctionIndex} />
        <Route path="/auctions/:id" render={routeProps => (<AuctionShow {...routeProps} />)} />
      </Switch>

    </Router>
  );
}

export default App;
