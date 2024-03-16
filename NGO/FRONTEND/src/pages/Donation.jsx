import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Donation/Donation_Title"
import Form from "../components/Donation/Donation_Form"
import Footer from "./Footer";

const Donation = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <Form />
        <Footer />
    </div>
  )
}

export default Donation