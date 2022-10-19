import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Navigate, useNavigate} from "react-router-dom";

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [salary, setSalary] = useState("");
    const [image,setImage]=useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
        setPassword(localStorage.getItem("salary"));
        setImage(localStorage.getItem("image"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id....",id);
        axios.put(
            `https://634a7ad35df9528514125bbf.mockapi.io/crud/${id}`,
        {
            name: name,
            email: email,
            password:password,
            salary:salary,
            image:image
        })
        .then(() => {
           navigate("/read");
        });
    };

  return (
    <>
  
    <fieldset>
    <legend style={{color:"#1994ec",fontWeight:"bold",fontSize:"30px",marginLeft:"40%",marginTop:"2%",color:"blue"}}>Update Data</legend>
    <form class="form1">
    <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" 
    className="form-control"
    value={name}
    onChange={(e)=> setName(e.target.value)} style={{boxShadow:"1px 2px blue"}}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control"
    value={email}
    onChange={(e)=> setEmail(e.target.value)}  style={{boxShadow:"1px 2px blue"}}
    />
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Password</label>
    <input type="password" 
    className="form-control"
    value={password}
    onChange={(e)=> setPassword(e.target.value)}  style={{boxShadow:"1px 2px blue"}}
    />
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Salary</label>
    <input type="text" 
    className="form-control"
    value={salary}
    onChange={(e)=> setSalary(e.target.value)}
    style={{boxShadow:"1px 2px blue"}}
    />
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Upload Image URL</label>
    <input type="text" 
    className="form-control"
    value={image}
    onChange={(e)=> setImage(e.target.value)}
    style={{boxShadow:"1px 2px blue"}}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" style={{width:"100%",borderRadius:"50px",fontWeight:"bold"}}
  onClick={handleUpdate}
  >
    Update</button>
   
</form>
</fieldset>
    </>
  )
}

export default Update