import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Navbar from "./Navbar";
import {Routes, Route} from "react-router-dom";
import Read from "./Read";
import Create from "./Create";
import Update from "./Update";
const App =()=> {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />            
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />         
           <Route path="/" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />         
         
        </Routes>
        </>
    );
};

export default App;