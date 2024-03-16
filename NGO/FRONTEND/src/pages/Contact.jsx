import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Contact Us/Contact_Title"
import Map from "../components/Contact Us/Contact_Map"
import Form from "../components/Contact Us/Contact_Form"
// import Feedback from "../components/Contact Us/Contact_Feedback"
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <Map />
        <Form />
        {/* <Feedback /> */}
        <Footer />
    </div>
  )
}

export default Contact
