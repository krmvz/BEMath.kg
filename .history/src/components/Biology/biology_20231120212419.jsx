import React from 'react';
import "./biology.scss";

const Biology = () => {
    const myf(){
        var a = document.getElementById("myft");
        a.innerHTML = "It changed"
    }
  return (
    <div>
      Biology page;<br/>
      <button onClick={myf()} className='btn-primary btn'>
        my button
      </button>
      <div id="myft"></div>
    </div>
  )
}

export default Biology
