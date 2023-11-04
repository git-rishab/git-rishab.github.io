import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
let requestMade = false;
const url = "https://portfolio-backend-5xul.onrender.com";
// Event handler for scroll event
function handleScroll() {
if (window.scrollY >= 700) {
    visited(); // Call the function to make the request
    window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener
}
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
async function visited() {
  try {
    if (!requestMade) {
      await fetch(`${url}/logs`);
      requestMade = true;
      console.log("requested");
    }
  } catch (error) {
    console.log(error.message);
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
