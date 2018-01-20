// Include React as a dependency
import React, { Component } from 'react'
import "./Profile.css";

// Include the components

import NewRun from "./Profile/NewRun";
import Progress from "./Profile/Progress";
import Table from "./Profile/Table";

// Include the helpers for making API calls
//import axios from "axios";

import helpers from "../utils/helpers";


// Create the Profile component
class Profile extends Component {

  state = { 
    savedRuns: []
  }

  // runTotal = (runData) => {
  //   helpers.getSaved()
  //     .then((runData) => {
  //       // map the distances, and then add up, product is what is sent through
  //       runData.milage.map()
  //     })

  //     // this.state.savedRuns.milage 
  // }

  // calcCirc = (runData) => {
  //   // take the result of runTotal, and minus from 24902
  // }

  updateRun = (formData) => {
    helpers.postSaved(formData)
    .then(() => {
      console.log(formData.title+" run logged");
      helpers.getSaved()
      .then((runData) => {
        this.setState({ savedRuns: runData.data });
        console.log("Logged runs: ", runData.data);
      });

    });
  }

  deleteRun = (item) => {
    helpers.deleteSaved(item._id)
    .then(() => {

      // Get the revised log!
      helpers.getSaved()
      .then((runData) => {
        this.setState({ savedRuns: runData.data });
        console.log("Logged runs: ", runData.data);
      });

    });
  }

  componentDidMount() {
    helpers.getSaved()
    .then((runData) => {
      this.setState({ savedRuns: runData.data });
      console.log("Saved results: ", runData.data);
    });
  }

  // Render the component
  render() {
    return (
      <div className="main-container">
      {/* Jumbotron */}
          <div id="jumbo" className="jumbotron jumbotron-fluid">
          </div>
        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <div className="row">
          <div className="col-lg-8">
            <NewRun updateRun={this.updateRun}/>
          </div>
          {/*
          <div className="col-lg-1"></div>
          */}
            <div className="col-lg-4">
               <Progress savedRuns={this.state.savedRuns}/>
            </div>
        </div>
        <Table savedRuns={this.state.savedRuns} deleteRun={this.deleteRun} />

      </div>
    );
  }
};

// Export the module back to the route
export default Profile;