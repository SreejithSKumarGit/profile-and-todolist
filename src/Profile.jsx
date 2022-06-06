import React from "react";

export default function Profile ()
{
    const [age,setAge]=React.useState(25);
  const increase=()=>
  {
    setAge(age+1);
  }
  const decrease=()=>
  {
    setAge(age-1);
  }
  const showDetails=()=>
  {
    if(document.getElementById("moreDetailsBtn").textContent==="Show more details")
    {
      document.getElementById("moreDetailsContainer").style.display="block";
      document.getElementById("moreDetailsBtn").textContent="Hide more details"
    }
    else
    {
      document.getElementById("moreDetailsContainer").style.display="none";
      document.getElementById("moreDetailsBtn").textContent="Show more details";
    }
  }
    return (
        <>
        <img src="./Sreejith.jpg" alt=''/>
        <h3>Name : Sreejith S Kumar</h3>
        <h3>Age : {age}</h3>
        <br />
        <button onClick={increase}>Increase Age</button>
        <button onClick={decrease}>Decrease Age</button>
        <br />
        <button id="moreDetailsBtn" onClick={showDetails}>Show more details</button>
        <div id='moreDetailsContainer'>
        <h3>Location: Kerala</h3>
        <h3>Orgainisation : Masai School</h3>
        </div>
        </>
    );
}