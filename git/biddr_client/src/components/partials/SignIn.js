import React from "react"
import { Session } from "../../requests";


class SignIn extends React.Component {
  state = {
    errors: []
  };

  createSession = (event => {
    event.preventDefault();
    const { currentTarget: form } = event;
    const formData = new FormData(form);
    const user = {
      email: formData.get('email'),
      password: formData.get("password")
    }

    Session.create(user).then(data => {
      if (data.status === 404) {
        this.setState({
          errors: [{ message: 'wrong email or password' }]
        })
      } else {
        this.setState({
          errors: []
        });
        this.props.history.push('/');
        if (typeof this.props.onSignIn === "function") {
          this.props.onSignIn();
        }
      }
    })
  })

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.createSession} >
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="enter email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <button> SignIn</button>
    
          {errors.length > 0 ? (
            <div className="ui negative message">
              <div className="header">
                Error in Signing
              </div>
              <p>
                {errors.map(err => err.message).join(", ")}
              </p>
            </div>) : (
              ""
            )}
      </form>
    )
  }
}

export default SignIn