// Include React as a dependency
import React, { Component } from 'react';
import "./Table.css";
import formatDate from "../../utils/formatDate.js";


class Table extends Component {

  // This code handles the sending of deleting a run to the profile component parent
  handleClick = (item) => {
   this.props.deleteRun(item);
  }

  // A helper method for mapping through our runs and outputting some HTML
  renderRuns = () => {
    return this.props.savedRuns.map((run, index) => {

      // Each run thus represents a list group item with a known index
      return (
        <div key={index}>
          <table className="table">
            <div className="row">
              <div className="col-md-5 col-xs-5">
                <td>
                    <span>
                      <em>{run.title}</em>
                    </span>
                </td>
              </div>
              <div className="col-md-1 col-xs-1">
                    <td>
                    <span>
                      <em>{run.milage}</em>
                    </span>
                  </td>
              </div>
              <div className="col-md-2 col-xs-2">
                <td>
                    <span>
                      <em>{run.totalRunTime}</em>
                    </span>
                </td>
              </div>
              <div className="col-md-2 col-xs-2">
                <td>
                    <span>
                      <em>{formatDate(run.date)}</em>
                    </span>
                </td>
              </div>
              <div className="col-md-2 col-xs-2">
                <button className="btn btn-danger btn-sm" onClick={() => { this.handleClick(run)}}>Delete</button>
              </div>
            </div>
            
              {/* Note how we associate the text-box inputs with the state values
              <h5>
              <p>Milage: {run.milage}</p>
              <p>Time: {run.totalRunTime}</p>
              <p>Date: {formatDate(run.date)}</p>
                <button className="btn btn-primary" onClick={() => { this.handleClick(run)}}>Delete</button>
            </h5> */}
          </table>
          <hr id="tableDivider" />
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
            <div className="panel">
              <div className="panel-heading">
                <h1 className="panel-title">
                    YOUR RUNS
                </h1>
              </div>
              <div className="panel-body">
                <div className="list-group">
                  <div id="tableHeaderRow" className="row">
                    <div className="col-md-5 col-xs-5">
                      <td>                          
                        ROUTE
                      </td>
                    </div>
                    <div className="col-md-1 col-xs-1">
                      <td>
                        MILAGE
                      </td>
                    </div>
                    <div className="col-md-2 col-xs-2">
                      <td>
                        TIME (min)
                      </td>
                    </div>
                    <div className="col-md-2 col-xs-2">
                      <td>
                        DATE
                      </td>
                    </div>
                    <div className="col-md-2 col-xs-2">
                    </div>
                    <hr id="headerDivider" />
                  </div>
                
                  {this.renderRuns()}
                </div>
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
    return (this.renderContainer());
  }

};

// Export the module back to the route
export default Table;