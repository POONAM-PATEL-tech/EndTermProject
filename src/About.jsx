import React from 'react';
import web from "../src/images/AboutUs1.webp";
import Common from "./Common";
const About =()=> {
    return (
        <>
        <Common 
        name="About Page"
        imgsrc={web} 
        visit="/Contact"
        btname="Contact Now"        
        />        
        </>
    );
};
export default About;