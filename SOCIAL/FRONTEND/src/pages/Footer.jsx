import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const Footer = () => {
	return (
		<div className="">
			<div className="flex gap-24 bg-neutral-700 text-white px-20 pt-8 pb-8">
				<div className="w-3/12 bg-blue-500 p-4 rounded-2xl">
					<h2 className="font-bold text-2xl text-center">Join Our Mission</h2>
					<div className="flex flex-col gap-6 mt-8">
						<div className="flex flex-col items-center justify-center w-60">
							<button className="bg-white hover:bg-blue-700 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-full">
								BECOME A VOLUNTEER ❤
							</button>
						</div>

						<Link to="/Donate">
							<div className="flex flex-col items-center justify-center w-60">
								<button className="bg-white hover:bg-blue-700 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-full">
									DONATE NOW ❤
								</button>
							</div>
						</Link>
					</div>
				</div>

				<div className="w-4/12">
					<h2 className="font-bold text-xl">Useful Links</h2>
					<div className="flex flex-col gap-2 mt-3">
						<Link to="/home" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Home Webpage</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="/About" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>About Us</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="/Stories" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Our Stories</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="/Donation" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Donate Us</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
					</div>
				</div>

				<div className="w-6/12">
					<h2 className="font-bold text-xl first-line">Contact Us</h2>
					<div className="text-sm italic mt-3">
						<div className="flex flex-row justify-between">
							<div className="flex flex-col">
								<div className="flex justify-between gap-4">
									<div>Anushka Mohan</div>
									<div>(22BCE5081)</div>
								</div>
								<div className="flex justify-between gap-4">
									<div>Eliksha Maheshwari</div>
									<div>(22BAI1312)</div>
								</div>
							</div>
							<div className="flex flex-col">
								<div className="flex justify-between gap-4">
									<div>Paridhi Rathore</div>
									<div>(22BCE1581)</div>
								</div>
								<div className="flex justify-between gap-4">
									<div>Shakti Swaroop Sahu</div>
									<div>(22BAI1012)</div>
								</div>
							</div>
						</div>
						
						<br />

						B.Tech in CSE - Spl. in AI with &nbsp;&nbsp; ( Core & Machine Learning ) <br />
						Vellore Institute of Technology - Chennai, Tamil Nadu, INDIA <br />

						<br />

						<strong>Phone : </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91 1010101010 <br />
						<strong>Email : </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; random_mail@gmail.com <br />
						<a href="https://health-care-website-two.vercel.app/"> <strong>Website : </strong>&nbsp;&nbsp; www.social-care.com</a>
					</div>
				</div>
			</div>

			<div className="bg-neutral-800 text-white py-4 flex justify-between px-20">
				<div className="text-sm">
					<a href="https://github.com/sws2210">
						2024 &copy; All Rights Reserved | Designed and Developed by Team APES 
					</a>
				</div>
				<div className="flex gap-4">
				<a href="https://www.facebook.com/">
					<FaFacebook className="text-1xl mr-2" />
				</a>
				<a href="https://www.instagram.com/">
					<FaInstagram className="text-1xl mr-2" />
				</a>
				<a href="https://github.com/sws2210">
					<FaGithub className="text-1xl mr-2" />
				</a>
				<a href="https://www.linkedin.com/">
					<FaLinkedin className="text-1xl mr-2" />
				</a>
				<a href="https://mail.google.com/">
					<FaGooglePlusG className="text-1xl mr-2" />
				</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
