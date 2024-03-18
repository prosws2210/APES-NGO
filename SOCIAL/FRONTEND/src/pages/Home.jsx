import React from "react";
import Navbar from "./Navbar";
import Main from "../components/Home/Home_Main.jsx";
import Home_KeyFeatures from "../components/Home/Home_KeyFeatures.jsx";

import Footer from "./Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Main />
			<Home_KeyFeatures />
			<Footer />
		</div>
	);
};

export default Home;  