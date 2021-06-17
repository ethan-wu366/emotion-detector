import React from 'react';

import ReactDOM from 'react-dom';
import Webcam from "react-webcam";

const videoConstraints = {
	width: { min: 480 },
	height: { min: 720 },
	aspectRatio: 0.6666666667
  };

ReactDOM.render(
	<Webcam 
		videoConstraints={videoConstraints} 
		width={480} 
		height={720}
		/>,
	document.getElementById('root')
  );

  const Webcam = (props) => {

    return (
        <Webcam>
            
        </Webcam>
    );
};



export default Webcam;