import React from 'react';
import ReactDOM from 'react-dom';
import Webcam from "react-webcam";


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot({width: 480, height: 270});
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <Webcam
          audio={false}
          height={270}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={480}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture Emotion</button>
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
  