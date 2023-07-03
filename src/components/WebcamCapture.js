import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

export default function WebcamCapture() {
const webcamRef = useRef(null);
const [capturedImage, setCapturedImage] = useState(null);

const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
};

return (
    <div>
    <Webcam videoConstraints={{ facingMode: 'environment' }} ref={webcamRef} />
    <button onClick={capturePhoto}>Capture Photo</button>
    {capturedImage && (
        <div>
        <h2>Captured Photo:</h2>
        <img src={capturedImage} alt="Captured" />
        </div>
    )}
    </div>
);
};