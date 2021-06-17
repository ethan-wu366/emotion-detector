import React from 'react';
import ReactDOM from 'react-dom';
import Webcam from "react-webcam";


const videoConstraints = {
	width: { min: 80 },
	height: { min: 120 },
	aspectRatio: 0.6666666667
  };

ReactDOM.render(
	<Webcam 
		videoConstraints={videoConstraints} 
		width={80} 
		height={120}
		/>,
	document.getElementById('root')
  );

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot({width: 640, height: 360});
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
      </>
    );
  };
  
  ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
  
  export default WebcamCapture;
  