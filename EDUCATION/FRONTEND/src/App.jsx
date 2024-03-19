import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Stories from "./pages/Stories.jsx";


export default function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Stories" element={<Stories />} />
				</Routes>
			</Router>
		</div>
	);
}
