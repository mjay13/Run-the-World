// Include React as a dependency
import React, { Component } from 'react'

// Include our helpers for API calls
import helpers from "../../utils/helpers";

// Results Component Declaration
class Table extends Component {

  // This code handles the deleting saved runs from our database
  handleClick = (item) => {
   this.props.deleteRun(item);
  }


  // delete run


  // A helper method for mapping through our runs and outputting some HTML
  renderRuns = () => {
    return this.props.savedRuns.map((run, index) => {

      // Each run thus represents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{run.title}</em>
              </span>
              <p>Milage: {run.milage}</p>
              <p>Time: {run.totalRunTime}</p>
              <p>Date: {run.date}</p>
                <button className="btn btn-primary" onClick={() => { this.handleClick(run)}}>Delete</button>
              
            </h3>

          </li>

        </div>
      );

    });

  }

  // A helper method for rendering a container to hold all of our runs
  renderContainer = () => {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderRuns()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    // If we have no runs, render this HTML
     if (!this.props.savedRuns) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>NO RUNS TO SHOW</em>
            </span>
          </h3>
        </li>
      );
    }
    // If we have runs, return this.renderContainer() which in turn, returns all the runs
    return this.renderContainer();
  }
};

// Export the module back to the route
export default Table;