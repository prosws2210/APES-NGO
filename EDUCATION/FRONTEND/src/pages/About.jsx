import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/About Us/About_Title"
import Content_start from "../components/About Us/About_ContentStart.jsx"
import Content from "../components/About Us/About_Content"
import Features from "../components/About Us/About_Features.jsx"
import Footer from "./Footer";

const About_Us = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <Content_start />
        <Content />
        <Features />
        <Footer />
    </div>
  )
}

export default About_Us
