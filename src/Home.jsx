import React from 'react'
 import './Home.css';
import web from "../src/images/HomePage.webp";
 import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <>
    <div id="home"> 
      <div className='box'>
        <div className='box-left'>
      <h1>Welcome to <span style={{color:"skyblue",fontWeight:"bolder"}}>HR</span> <span style={{color:"black"}}>Home Page</span></h1>
      <p style={{marginTop:"40px" ,fontWeight:"bold",fontSize:"25px",color:"darkblue"}}>"To win in the marketplace, you must first win the workplace"</p>
      <p style={{marginTop:"40px" ,fontWeight:"bold",background:"#add8e6",fontSize:"25px",color:"darkblue"}}>"To win in the marketplace, you must first win the workplace"</p>
      
      </div>
     
      <div className="box-right">
      <img src={web} style={{marginTop:"30px"}}></img>      
      
      </div>
      
      </div>
      
      </div>
      
        
        </>
  )
}

export default Home