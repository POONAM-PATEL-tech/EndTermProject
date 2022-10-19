import React, { Component } from 'react';
  
class Get extends Component {
  render() {
  return (
    <div
      style={{ width: '50%', margin: '0px auto' }}
    >
      
      <img src={localStorage.getItem('image')} 
      alt={<img src={"C:\Users\DELL\Downloads\hrlogo.jpg"}/>}
      />
      
  
    </div>
  );
 }
}
export default Get;