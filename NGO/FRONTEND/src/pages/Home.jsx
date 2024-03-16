import React from "react";
import Navbar from "./Navbar";
import Home_Main from "../components/Home/Home_Main";
import Home_Components from "../components/Home/Home_Components";
import Home_KeyFeatures from "../components/Home/Home_KeyFeatures";
import Footer from "./Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Home_Main />
			<Home_Components />
			<Home_KeyFeatures />
			<Footer />
		</div>
	);
};

export default Home;  