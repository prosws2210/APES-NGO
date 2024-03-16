import React from "react";
import Navbar from "./Navbar";
import HomeSlider from "../components/Home/Home_Slider";
import Home_Components from "../components/Home/Home_Components";
import Home_Count from "../components/Home/Home_Count";
import Home_KeyFeatures from "../components/Home/Home_KeyFeatures";
import Home_Partner from "../components/Home/Home_Partner";
import Footer from "./Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<HomeSlider />
			<Home_Components />
			<Home_Count />
			<Home_KeyFeatures />
			<Home_Partner />
			<Footer />
		</div>
	);
};

export default Home;  