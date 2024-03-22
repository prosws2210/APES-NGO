import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Contact Us/Contact_Title"
import Map from "../components/Contact Us/Contact_Map"
import States from "../components/Contact Us/Contact_States.jsx"
import Form from "../components/Contact Us/Contact_Form"
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <Map />
        <States />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact
