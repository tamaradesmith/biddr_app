import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import NavBar from './components/partials/NavBar';
import AuctionIndex from './components/AuctionIndex'
import AuctionShow from './components/AuctionShow'
import SignIn from './components/partials/SignIn'
import { User, Session } from "./requests"
import AuthRoute from "./components/partials/AuthRoute";
import AuctionNew from './components/AuctionNew';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: null,
    isLoading: true
  }

  getUser = () =>{
    User.current()
    .then(data =>{
      if(typeof data.id !== "number") {
        this.setState({isLoading: false,
        currentUser: null});
      } else {
        this.setState({isLoading: false,
        currentUser: data });
      }
    })
    .catch(() => {
      this.setState({isLoading: false})
    });

  }
  signOut = () => {
    Session.destroy(this.state.currentUser.id).then(() =>{
      this.setState({
        currentUser: null
      });
    });
  }

  componentDidMount(){
    this.getUser();

  }

  render() {
const { isLoading, currentUser } = this.state;
if (isLoading){
  return "loading"
}
    return (
      <Router>
        <NavBar currentUser={currentUser} onSignOut = {this.signOut} />
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/auctions" exact component={AuctionIndex} />

          <AuthRoute
          isAllowed={currentUser}
           path="/auctions/new" exact component={AuctionNew} />

          <Route
            path="/auctions/:id"
            render={routeProps => (
              <AuctionShow {...routeProps}
                currentUser={this.state.currentUser}
              />
            )} />

          {/* users */}

          <Route path="/sign_in" render={routeProps =>(
            <SignIn onSignIn={this.getUser} {...routeProps} />
          )} />


        </Switch>

      </Router>
    );
  }
}

export default App;
