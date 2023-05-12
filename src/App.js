import React from 'react';
import './App.css';
// import Camera from './components/Camera';
import WebcamCapture from './components/WebcamCapture';
import { usePWAInstall } from 'react-use-pwa-install'

function App() {
  const install = usePWAInstall()
  return (
    <div className="App">
      <header>
			{<button onClick={install}>Install App</button>}
		</header>
      <WebcamCapture />
      {/* <Camera /> */}
    </div>
  );
}

export default App;