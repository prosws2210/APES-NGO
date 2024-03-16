import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import {Toaster} from "react-hot-toast";

export default function App() {
	return (
		<div>
			<Toaster />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Register" element={<Register />} />
				</Routes>
			</Router>
		</div>
	);
}
