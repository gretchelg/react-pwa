import React, { useRef, useState } from 'react';

export default function Camera() {
const videoRef = useRef(null);
const [stream, setStream] = useState(null);

const constraints = {
    video: {
        width: { ideal: 4096 },
          height: { ideal: 2160 },
      facingMode: {
        ideal: "environment"
      }
    }
  };
const startCamera = async (constraints) => {
    try {
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

    if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
    }

    setStream(mediaStream);
    } catch (error) {
    console.log('Error accessing camera:', error);
    }
};

const stopCamera = () => {
    if (videoRef.current) {
    const mediaStream = videoRef.current.srcObject;
    const tracks = mediaStream.getTracks();

    tracks.forEach((track) => track.stop());
    }

    setStream(null);
};

return (
    <div>
    {stream ? (
        <button onClick={stopCamera}>Stop Camera</button>
    ) : (
        <button onClick={startCamera}>Start Camera</button>
)}

    {stream && <video ref={videoRef} autoPlay />}
    </div>
)
};