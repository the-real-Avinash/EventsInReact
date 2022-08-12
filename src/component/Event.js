import React from 'react'
import { useState } from 'react';
import './Event.css';
const Event = () => {
    const purple = "#9b59b6";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("click Me");

    const bgChange = () =>{
        console.log("Change!!!");
        let newBg = 'red';
        setBg(newBg);
        setName("Changed!!");  
    }

    const bgBack = () =>{
        setBg(purple);
        setName("Back to Normal");
    }
  return (
    <div style={{backgroundColor: bg}}>
    <button onClick={bgChange} onDoubleClick = {bgBack}>{name}</button>
    </div>
  )
}

export default Event