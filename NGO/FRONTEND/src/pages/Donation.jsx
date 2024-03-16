import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Donation/Donation_Title"
import Form from "../components/Donation/Donation_Form"
import Contribute from "../components/Donation/Donation_Contribute.jsx"
import Works from "../components/Donation/Donation_Works.jsx"
import Footer from "./Footer";

const Donation = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <Form />
        <Contribute />
        <Works />
        <Footer />
    </div>
  )
}

export default Donation