import React from 'react';
import './App.css';
import Camera from './components/Camera';
import WebcamCapture from './components/WebcamCapture'

function App() {
  return (
    <div className="App">
      <WebcamCapture />
      {/* <Camera /> */}
    </div>
  );
}

export default App;