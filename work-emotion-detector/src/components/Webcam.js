import React from 'react';

import ReactDOM from 'react-dom';
import WebCamera from "react-webcam";


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const Webcam = () => {
    const webcamRef = React.useRef(null);
  
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]
    );
  
    return (
      <>
        <WebCamera
          audio={false}
          height={270}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={480}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </>
    );
  };

export default Webcam;