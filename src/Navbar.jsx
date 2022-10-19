import React from 'react'
import logo from './images/HR3.png'
import { NavLink ,Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <div className="container-fluid nav_bg"> */}
        {/* <div className="row"> */}
          {/* <div className="col-10 mx-auto"> */}


            <nav className="navbar navbar-expand-lg navbar-light " style={{zIndex:"1",backgroundColor:"#93d3fb",maxWidth:"100%",margin:"0px"}}>
            {/* <nav class="navbar navbar-light" style="background-color: #e3f2fd;"> */}
              <div className="container-fluid">
                <Link
                  className="navbar-brand" to="/" ><img src={logo} style={{height:"40px",width:"50px"}}></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                    </li>

                    

                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/login" >Login</NavLink>
                    </li>
          

              

                  </ul>

                </div>
              </div>
            </nav>
          {/* </div> */}
        {/* </div> */}
       {/* </div> */}
    </>
  );
};

export default Navbar;