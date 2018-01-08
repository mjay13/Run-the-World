// Include React as a dependency
import React, { Component } from 'react'

// Query Component Declaration
class New_Run extends Component {
  // Here we set initial variables for the component to be blanks
  state = { 
    date: "",
    mileage: "",
    time: ""
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

  // // This code handles the sending of the search terms to the parent Search component
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.updateSearch(this.state.search, this.state.start, this.state.end);
  // }

  // Here we render the Query component
  render() {

    return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-8">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                     LOG NEW RUN
                  </strong>
                </h1>
              </div>
              <div className="panel-body">

                {/* Note how we associate the text-box inputs with the state values */}
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className=""><strong>Date</strong></h4>
                    <input
                      type="text"
                      value={this.state.date}
                      className="form-control"
                      id="date"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>Mileage</strong></h4>
                    <input
                      type="number"
                      value={this.state.mileage}
                      className="form-control"
                      id="mileage"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>Time</strong></h4>

                    <input
                      type="number"
                      value={this.state.time}
                      className="form-control"
                      id="time"
                      onChange={this.handleChange}
                      required
                    />

                  </div>

                  {/* Here we create the onClick event that triggers the HandleSubmit */}
                  <div className="pull-right">
                    <button
                      type="submit"
                      className="btn btn-danger"
                    >
                      <h4>Submit</h4>
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

// Export the module back to the route
export default New_Run;