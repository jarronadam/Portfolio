import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('DOMContentLoaded', function() {
  var xPos = 0;
  var yPos = 0;
  var xDirection = 1; // 1 for right, -1 for left
  var yDirection = 1; // 1 for down, -1 for up

  function moveBackground() {
      xPos += xDirection;
      yPos += yDirection;
      
      if (xPos > window.innerWidth || xPos < 0) {
          xDirection *= -1;
      }
      if (yPos > window.innerHeight || yPos < 0) {
          yDirection *= -1;
      }

      document.getElementById('gifBackground').style.backgroundPosition = xPos + 'px ' + yPos + 'px';
      requestAnimationFrame(moveBackground);
  }

  moveBackground();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
