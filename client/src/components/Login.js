import React, { Component } from 'react';
import { Link } from "react-router";


// Query Component Declaration
class Login extends Component {
  // Here we set initial variables for the component to be blanks
  state = { 
    username: "",
    password: "",
  }

	// // Whenever we detect ANY change in the textbox, we register it.
	// handleChange = (event) => {
	//   // Here we create syntax to capture any change in text to the query terms (pre-search).
	//   // See this Stack Overflow answer for more details:
	//   // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
	//   var newState = {};
	//   newState[event.target.id] = event.target.value;
	//   this.setState(newState);
	// }

	handleSubmit = (event) => {
	  event.preventDefault();
	  window.location.href = '/Profile';
	  this.setState({ username: "", password: "" });
	}

	// userLogin = (formData) => {
	//     helpers.postSaved(formData)
	//     .then(() => {
	//       console.log(formData.title+" run logged");
	//       helpers.getSaved()
	//       .then((runData) => {
	//         this.setState({ savedRuns: runData.data });
	//         console.log("Logged runs: ", runData.data);
	//       });

	//     });
	// }


  // Here we render the New Run Form component
  render() {

    return (
    	<div className="jumbotron">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">
                  User Login
                </h3>
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
                      className="btn btn-success"
                    >

                      <h4>Submit</h4>
                    </button>
                  </div>
                </form>

              </div>
            </div>
        </div>
    );
  }
};


export default Login;

// <Link to="/Profile">Profile</Link>