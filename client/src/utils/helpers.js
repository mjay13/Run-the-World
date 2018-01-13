// Include the Axios library for HTTP requests
import axios from "axios";

// Helper Functions
const helpers = {
  
  // This will return any saved runs from our database
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("Runs retrieved: ", results);
        return results;
      });
  },
  
  // This will save new runs to our database
  postSaved: function({title, date, milage, totalRunTime}) {
    var newRun = { title, date, milage, totalRunTime };
    console.log('Run saved: ', newRun)
    return axios.post("/api/saved", newRun)
      .then(function(response) {
        console.log("Run _id:  ", response.data._id);
        return response.data._id;
      });
  },
  
  // This will remove saved runs from our database
  deleteSaved: function(_id) {
    return axios.delete("/api/saved", {
      params: {
        "_id": _id
      }
    })
    .then(function(results) {
      console.log("Run removed: ", results);
      return results;
    });
  }
};

// We export the helpers function
export default helpers;