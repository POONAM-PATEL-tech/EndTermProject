import axios from 'axios';
import React,{ useState } from 'react';
import {useNavigate,Link} from "react-router-dom";
import Google from './images/Google1.png';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Create.css';
//import {Link} 
const Create = () => {

  const [name, setName] =  useState("");
  const [email, setEmail] =  useState("");
  const [password, setPassword] =  useState("");
  const [salary, setSalary] =  useState("");
  const [image,setImage]=useState("");

  const history = useNavigate()
  const header = {"Access-Control-Allow-Origin": "*"};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked")
     axios.post("https://634a7ad35df9528514125bbf.mockapi.io/crud",{
      name: name, 
      email: email,
      password:password,
      salary:salary,
      image:image,
      header,
     })

     .then(() => {
      history("/read");
     });
  };

  return (
    <>
    <div className='container'>
      
    {/* <h2 id="heading">Login</h2> */}

    <form className="form1">
      <fieldset>
        <legend style={{color:"#1994ec",fontWeight:"bold",fontSize:"30px"}}>Login</legend>
        <div>
            <Link to="https://google.com" target="_blank" rel="noreferrer">
          <button style={{borderRadius:"50px",borderColor:"white",marginLeft:"40%"}}><img src={Google}style={{height:"50px",width:"50px"}}></img></button>
        </Link>
        
        </div>
    <div className="mb-1">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" 
    className="form-control"
    onChange={(e)=> setName(e.target.value)}
    />
  </div>
  <div class="mb-1">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control"
    aria-describedby="emailHelp"
    onChange={(e)=> setEmail(e.target.value)}
    />
  </div>

  

  <div class="mb-1">
    <label for="exampleInputEmail1" className="form-label">Password</label>
    <input type="password" 
    className="form-control"
    aria-describedby="emailHelp"
    onChange={(e)=> setPassword(e.target.value)}
    />
  </div>

  <div class="mb-1">
    <label for="exampleInputEmail1" className="form-label">Salary</label>
    <input type="email" 
    className="form-control"
    aria-describedby="emailHelp"
    onChange={(e)=> setSalary(e.target.value)}
    />
  </div>
  <div class="mb-2">
    <label for="exampleInputEmail1" className="form-label">Upload URL Image</label>
    <input type="text" 
    className="form-control"
    aria-describedby="emailHelp"
    onChange={(e)=> setImage(e.target.value)}
    />
  </div>
  
  
  <button type="submit" className="btn2" onClick={handleSubmit} style={{marginLeft:"px",width:"100%",height:"10%"}}>
    Login</button>
    </fieldset>
</form>

</div>

    </>
  )
}

export default Create