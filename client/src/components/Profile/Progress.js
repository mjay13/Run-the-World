import React, { Component } from 'react';
import "./Progress.css";

// 24,902mi = circumference of the earth


class Progress extends Component {
	

	milesLogged = () => {
		const milageArr = [];
		
		this.props.savedRuns.map(item => {
		milageArr.push(item.milage);

		});

		function getSum(total, num) {
			return total + num;
			// console.log("MILAGE ARRAY: "+milageArr);
		}

		return milageArr.reduce(getSum, 0);	
	}

	milesProgress = () => {
		var x = this.milesLogged();
		const circ = 24902
		//24902 - milesLogged
		const z = circ - x;
		return z;
	}

render() {

	return (
		<div id="totalDistance" className="panel">
	    	<div className="panel-heading">
	        	<h1 className="panel-title text-center">
	            	TOTAL DISTANCE COVERED
	            </h1>
	        </div>
	    	<div className="panel-body">
				<div className="img-circle">
					<h3 id="totalMiles" className="text-center">{this.milesLogged()}</h3>
					{/* total miles calculated from db to put towards running the world */}
					<h5 id="miles" className="text-center">MILES</h5>
				</div>
				<br />
				<hr />
				<br />
				<h3 id="milesLeft" className="text-center">{this.milesProgress()}</h3>
				{/* miles left to run the world (24902) */}
				<h5 className="text-center">MILES TO RUN THE WORLD</h5>
			</div>
	    </div>
            
	)
}
}

export default Progress;