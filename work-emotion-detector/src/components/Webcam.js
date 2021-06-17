import React from 'react';

import ReactDOM from 'react-dom';
import WebCamera from "react-webcam";

const videoConstraints = {
	width: { min: 160 },
	height: { min: 240 },
	aspectRatio: 0.6666666667
  };

ReactDOM.render(
	<WebCamera 
		videoConstraints={videoConstraints} 
		width={160} 
		height={240}
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