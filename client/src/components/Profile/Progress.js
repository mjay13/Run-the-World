import React from 'react';

function Progress(props){
	return (
		<div className="panel panel-primary">
	    	<div className="panel-heading">
	        	<h1 className="panel-title text-center">
	            	<strong>
	                    TOTAL DISTANCE COVERED
	                 </strong>
	            </h1>
	        </div>
	    	<div className="panel-body">
				<h2 className="text-center"> 96 </h2>
				<h5 className="text-center"> MILES </h5>
				<br />
				<br />
				
				<h4 className="text-center"> DISTANCE LEFT TO RUN THE GLOBE </h4>
				<h3 className="text-center"> 96 MILES LEFT TO RUN CALCULATION </h3>
			</div>
	    </div>
            
	)
}

export default Progress;