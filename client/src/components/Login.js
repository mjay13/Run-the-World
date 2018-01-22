import React, { Component } from 'react';
import { Link } from "react-router";
import "./Login.css";



// Query Component Declaration
class Login extends Component {
  // Here we set initial variables for the component to be blanks
  state = { 
    username: "",
    password: "",
  }

	handleSubmit = (event) => {
	  event.preventDefault();
	  // window.location.href = '/Profile';
	  this.setState({ username: "", password: "" });
	}


  // Here we render the New Run Form component
  render() {

    return (
      <div className="main-container">
        {/* Jumbotron */}
        <div id="loginJumbo" className="jumbotron jumbotron-fluid"></div>
      	
        {/* Login Jumbotron */}
        <div id="login" className="jumbotron">
          <div className="panel">
            <div className="panel-heading">
              <h2 id="loginTitle" className="panel-title">
                User Login
              </h2>
            </div>
            <div className="panel-body">

                  {/* Note how we associate the text-box inputs with the state values */}
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">

                      
                      <h4 className="fieldName"><strong>Email</strong></h4>
                      <input
                        type="email"
                        placeholder="your_email@domain.com"
                        value={this.state.username}
                        className="form-control"
                        id="email"
                        onChange={this.handleChange}
                        
                      />

                      <h4 className="fieldName"><strong>Password</strong></h4>
                      <input
                        type="password"
                        placeholder="*****"
                        value={this.state.password}
                        className="form-control"
                        id="password"
                        onChange={this.handleChange}
                        
                      />

                    </div>

                    {/* Here we create the onClick event that triggers the HandleSubmit */}
                    <div className="pull-right">
                      <button
                        type="submit"
                        className="btn btn-default"
                      >
                        <h4>Sign Up</h4>
                      </button>

                      <button
                        type="submit"
                        className="btn btn-success"
                      >
                        <h4><Link to="/Profile">Sign In</Link></h4>
                      </button>
                    </div>
                  </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default Login;

// <Link to="/Profile">Profile</Link>