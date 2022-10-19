import React, { Component } from 'react';
import Post from './Image';
  
const parentDiv = {
  align: 'center',
  margin: '0px auto auto auto',
  textAlign: 'center',
}
  
class Allimage extends Component {
  render() {
    return (
    <div style={parentDiv}>
     <h1 style={{color:'#8A2482'}}>Pics <span 
       style={{color: '#248A6E'}}>Villa</span>
     </h1>
      
    <p>One place stop for all kinds of images</p>
  
    <hr></hr>
      <h1>All Posts</h1>
      <Post/>
    </div>
    );
   }
}
  
export default Allimage;