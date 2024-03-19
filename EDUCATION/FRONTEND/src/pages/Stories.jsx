

import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Stories/Stories_Title.jsx"
import Features from "../components/Stories/Stories_Features.jsx"

import Footer from "./Footer";

const Stories = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <Features />

        <Footer />
    </div>
  )
}

export default Stories
