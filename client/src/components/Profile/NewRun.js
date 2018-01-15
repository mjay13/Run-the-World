// Include React as a dependency
import React, { Component } from 'react'
import "./NewRun.css";

// Query Component Declaration
class NewRun extends Component {
  // Here we set initial variables for the component to be blanks
  state = { 
    title: "",
    date: "",
    milage: "",
    totalRunTime: ""
  }

 // Whenever we detect ANY change in the textbox, we register it.
 handleChange = (event) => {
  // Here we create syntax to capture any change in text to the query terms (pre-search).
  // See this Stack Overflow answer for more details:
  // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
  var newState = {};
  newState[event.target.id] = event.target.value;
  this.setState(newState);
}

handleSubmit = (event) => {
  event.preventDefault();
  this.props.updateRun(this.state);
}

  // Here we render the New Run Form component
  render() {

    return (
            <div className="panel">
              <div className="panel-heading">
                <h1 className="panel-title">
                  LOG NEW RUN
                </h1>
              </div>
              <div className="panel-body">

                {/* Note how we associate the text-box inputs with the state values */}
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">

                    
                    <h4 className="fieldName"><strong>Title</strong></h4>
                    <input
                      type="text"
                      placeholder="Your route"
                      value={this.state.title}
                      className="form-control"
                      id="title"
                      onChange={this.handleChange}
                      required
                    />

                    <h4 className="fieldName"><strong>Date</strong></h4>
                    <input
                      type="date"
                      placeholder="mm/dd/yyyy"
                      value={this.state.date}
                      className="form-control"
                      id="date"
                      onChange={this.handleChange}
                      required
                    />

                    <h4 className="fieldName"><strong>Milage</strong></h4>
                    <input
                      type="number"
                      placeholder="How many miles did you run?"
                      value={this.state.milage}
                      className="form-control"
                      id="milage"
                      onChange={this.handleChange}
                      required
                    />

                    <h4 className="fieldName"><strong>Time</strong></h4>

                    <input
                      type="number"
                      value={this.state.totalRunTime}
                      placeholder="hh:mm:ss"
                      className="form-control"
                      id="totalRunTime"

                      onChange={this.handleChange}
                      required
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
    );
  }
};

// Export the module back to the route
export default NewRun;