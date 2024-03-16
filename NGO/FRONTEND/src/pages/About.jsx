import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/About Us/About_Title"
import Content from "../components/About Us/About_Content"
import Info from "../components/About Us/About_Info.jsx"
import Gallery from "../components/About Us/About_Gallery"
import Footer from "./Footer";

const About_Us = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <Content />
        <Info />
        <Gallery />
        <Footer />
    </div>
  )
}

export default About_Us
