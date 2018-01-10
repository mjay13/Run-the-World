// Include React as a dependency
import React, { Component } from 'react'

// Include the Query and Results components
import New_Run from "./Profile/New_Run";
import Progress from "./Profile/Progress";
import Table from "./Profile/Table";

// Include the helpers for making API calls
import axios from "axios";


// Create the Profile component
class Profile extends Component {
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  state = { 
    runs: []
  }

  // componentDidMount() {

  //   axios.get("/api/saved")
  //     .then(function(results) {
  //       console.log("axios results", results);
  //       this.setState({runs : data})
  //     });
  // }



  // Render the component. Note how we deploy both the Query and the Results Components
  render() {
    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <div className="row">
          <div className="col-lg-7">
            <New_Run />
          </div>
          <div className="col-lg-1"></div>
            <div className="col-lg-4">
               <Progress />
            </div>
        </div>
        <Table runs={this.state.runs} />
      </div>
    );
  }
};

// Export the module back to the route
export default Profile;