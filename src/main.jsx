import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

    const Timer=()=>{
  //const [hours,setHours]=useState(0);
  //const [minuites,setMinutes]=useState(0);
  const [seconds,setSeconds]=useState(0);
 // const [isActive,setIsActive]=useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return   (
     <div>
  <h1>Auto Counting Seconds Timer</h1>
  <div>
    Timer: {seconds} seconds
  </div>
</div>
);
};
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   !-- <App />


  </React.StrictMode>,
)
