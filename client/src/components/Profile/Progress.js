import React from 'react';
import "./Progress.css";

function Progress(props){
	return (
		<div id="totalDistance" className="panel">
	    	<div className="panel-heading">
	        	<h1 className="panel-title text-center">
	            	TOTAL DISTANCE COVERED
	            </h1>
	        </div>
	    	<div className="panel-body">
				<div className="img-circle">
					<h3 id="totalMiles" className="text-center">18534</h3>
					<h5 id="miles"className="text-center">MILES</h5>
				</div>
				<br />
				<hr />
				<br />
				<h3 id="milesLeft" className="text-center">24805</h3>
				<h5 className="text-center">MILES TO RUN THE WORLD</h5>
			</div>
	    </div>
            
	)
}

export default Progress;