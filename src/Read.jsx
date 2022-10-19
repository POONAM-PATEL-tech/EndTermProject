import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import './Read.css'

const Read = () => {

  const [data, setData] = useState([]);

  function getData() {
    axios.get('https://634a7ad35df9528514125bbf.mockapi.io/crud')
    .then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }
  
  function handleDelete(id){
    axios.delete(`https://634a7ad35df9528514125bbf.mockapi.io/crud/${id}`
    ).then(() => {
      getData();
    })
  }

  const setToLocalStorage = (id,name,email,password,salary,image) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password",password);
    localStorage.setItem("salary",salary);
    localStorage.setItem("image",image);

    
  }

  


  useEffect(() => {
    getData();

  }, []);

  getData();
  
  return (
    <>
    {/* <div className='container'>  */}
    <h2 style={{marginLeft:"43%",marginTop:"5%",color:"#355e9f",fontWeight:"bold",marginBottom:"3%",textDecorationLine:"underline"}}>All Data</h2>
      <table className="table" style={{maxWidth:"90%",marginLeft:"3%"}}>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Salary</th>
      <th scope="col">Image</th>
      <th scope="col">Actions</th>
      <th scope="col"></th>
      <th scope="col"></th>
     
    </tr>
  </thead>
  {
    data.map((eachData) => {
      return (
        <>
        <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>{eachData.password}</td>
      <td>{eachData.salary}</td>
      
      <td><img className="read_img" src={(eachData.image)} 
       />
      </td>
      <td>
        <Link to="/update">
          <button className="btn-success" onClick={()=> setToLocalStorage(
            eachData.id, 
            eachData.name, 
            eachData.email,
            eachData.password,
            eachData.salary,
            eachData.image
            )
            }>
              Edit{""}
              </button>
          </Link>
        </td>
        <td>
        <button className="btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
        </td>
      
    </tr>
   
  </tbody>
        </>
      )

    })
    
}
</table>
{/* </div> */}
    </>
  )
}

export default Read