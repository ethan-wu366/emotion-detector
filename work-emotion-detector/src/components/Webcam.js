import React from 'react';

import ReactDOM from 'react-dom';
import WebCamera from "react-webcam";

const videoConstraints = {
	width: { min: 480 },
	height: { min: 720 },
	aspectRatio: 0.6666666667
  };

ReactDOM.render(
	<WebCamera 
		videoConstraints={videoConstraints} 
		width={480} 
		height={720}
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