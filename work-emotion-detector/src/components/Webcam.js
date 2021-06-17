import React from 'react';

import ReactDOM from 'react-dom';
import WebCamera from "react-webcam";

const videoConstraints = {
	width: { min: 80 },
	height: { min: 120 },
	aspectRatio: 0.6666666667
  };

ReactDOM.render(
	<WebCamera 
		videoConstraints={videoConstraints} 
		width={80} 
		height={120}
		/>,
	document.getElementById('root')
  );

  const Webcam = (props) => {

    return (
        <WebCamera>

        </WebCamera>
    );
};



export default Webcam;